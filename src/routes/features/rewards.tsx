import { createFileRoute } from '@tanstack/react-router';
import FeatureTemplate from '@/components/postpurchase/feature-template';
import { featuresData } from '@/lib/features-data';

export const Route = createFileRoute('/features/rewards')({
  head: () => ({
    meta: [
      { title: featuresData.rewards.title },
      { name: 'description', content: featuresData.rewards.metaDescription },
      { property: 'og:title', content: featuresData.rewards.title },
      { property: 'og:description', content: featuresData.rewards.metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/features/rewards' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/features/rewards' }
    ]
  }),
  component: () => <FeatureTemplate feature={featuresData.rewards} />,
});
