import { createFileRoute } from '@tanstack/react-router';
import ForBrandsPage from '@/components/postpurchase/for-brands-page';

export const Route = createFileRoute('/for-brands')({
  head: () => ({
    meta: [
      { title: 'For Brands | AVIRA Post-Purchase Platform for Modern E-Commerce' },
      {
        name: 'description',
        content: 'Why modern D2C, e-commerce, and gifting brands choose AVIRA to lower CAC, elevate customer lifetime value (LTV), and generate authentic unboxing content.'
      },
      { property: 'og:title', content: 'AVIRA for Fast-Growing Brands' },
      { property: 'og:description', content: 'Turn every delivered order into an accountable, high-margin customer retention channel.' },
      { property: 'og:url', content: 'https://avirad2c.app/for-brands' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/for-brands' }
    ]
  }),
  component: ForBrandsPage,
});
