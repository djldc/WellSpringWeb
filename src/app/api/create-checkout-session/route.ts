import { NextRequest, NextResponse } from 'next/server';

// Template product catalog
const templates: Record<string, { name: string; price: number; description: string }> = {
  'spinealign-pro': { name: 'SpineAlign Pro', price: 24900, description: 'Complete chiropractic practice website template' },
  'vitality-wellness': { name: 'Vitality Wellness', price: 19900, description: 'Elegant wellness center website template' },
  'medpractice-plus': { name: 'MedPractice Plus', price: 29900, description: 'HIPAA-ready medical practice website template' },
  'backbone-health': { name: 'BackBone Health', price: 19900, description: 'Modern chiropractic website template' },
  'elevate-business': { name: 'Elevate Business', price: 17900, description: 'Versatile business website template' },
  'serenity-spa': { name: 'Serenity Spa', price: 21900, description: 'Beautiful spa and wellness website template' },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { templateId } = body;

    // Check if Stripe secret key is configured
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey || stripeSecretKey.startsWith('sk_test_your_')) {
      return NextResponse.json({
        message: 'Stripe is not configured yet. Add your STRIPE_SECRET_KEY to .env.local to enable payments.',
        setup: true,
      });
    }

    const template = templates[templateId];
    if (!template) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    // Dynamic import of Stripe (only when key is configured)
    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2023-10-16' });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: template.name,
              description: template.description,
            },
            unit_amount: template.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${siteUrl}/templates?success=true&template=${templateId}`,
      cancel_url: `${siteUrl}/templates?canceled=true`,
      metadata: {
        templateId,
        templateName: template.name,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    console.error('Stripe checkout error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
