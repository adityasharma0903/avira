import { createFileRoute } from '@tanstack/react-router';
import IndustriesHubPage from '@/components/postpurchase/industries-hub-page';

export const Route = createFileRoute('/industries/')({
  head: () => ({
    meta: [
      { title: 'Industries | AVIRA Post-Purchase Platform' },
      {
        name: 'description',
        content: 'Explore AVIRA post-purchase growth frameworks tailored for direct-to-consumer (D2C), gifting, beauty, and fashion apparel brands.'
      },
      { property: 'og:title', content: 'AVIRA Industries | Tailored Post-Purchase Growth' },
      { property: 'og:description', content: 'Industry-specific unboxing experiences and retention loops.' },
      { property: 'og:url', content: 'https://avirad2c.app/industries' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/industries' }
    ]
  }),
  component: IndustriesHubPage,
});
