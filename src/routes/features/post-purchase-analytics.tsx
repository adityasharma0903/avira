import { createFileRoute } from '@tanstack/react-router';
import FeatureTemplate from '@/components/postpurchase/feature-template';
import { featuresData } from '@/lib/features-data';

export const Route = createFileRoute('/features/post-purchase-analytics')({
  head: () => ({
    meta: [
      { title: featuresData['post-purchase-analytics'].title },
      { name: 'description', content: featuresData['post-purchase-analytics'].metaDescription },
      { property: 'og:title', content: featuresData['post-purchase-analytics'].title },
      { property: 'og:description', content: featuresData['post-purchase-analytics'].metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/features/post-purchase-analytics' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/features/post-purchase-analytics' }
    ]
  }),
  component: () => <FeatureTemplate feature={featuresData['post-purchase-analytics']} />,
});
