import { createFileRoute } from '@tanstack/react-router';
import FeaturesHubPage from '@/components/postpurchase/features-hub-page';

export const Route = createFileRoute('/features/')({
  head: () => ({
    meta: [
      { title: 'AVIRA Features | The Complete Post-Purchase Growth Suite' },
      {
        name: 'description',
        content: 'Explore AVIRA post-purchase growth features: UGC collection, customer referrals, dynamic rewards, verified reviews, retention loops, and analytics.'
      },
      { property: 'og:title', content: 'AVIRA Features | Complete Post-Purchase Growth Platform' },
      { property: 'og:description', content: 'Turn packaging inserts into measurable customer engagement, UGC, referrals, and repeat purchases.' },
      { property: 'og:url', content: 'https://avirad2c.app/features' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/features' }
    ]
  }),
  component: FeaturesHubPage,
});
