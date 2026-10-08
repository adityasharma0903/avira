import { createFileRoute } from '@tanstack/react-router';
import PricingPage from '@/components/postpurchase/pricing-page';

export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: 'Pricing Plans | AVIRA Post-Purchase Growth Platform' },
      {
        name: 'description',
        content: 'Transparent, scalable pricing for D2C and e-commerce brands. From early-stage pilots to high-volume enterprise fulfillment, start transforming post-purchase today.'
      },
      { property: 'og:title', content: 'AVIRA Pricing | Scalable Post-Purchase Growth' },
      { property: 'og:description', content: 'Invest in customer connections that compound. Explore transparent pricing for AVIRA D2C.' },
      { property: 'og:url', content: 'https://avirad2c.app/pricing' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/pricing' }
    ]
  }),
  component: PricingPage,
});
