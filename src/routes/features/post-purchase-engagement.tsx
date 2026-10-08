import { createFileRoute } from '@tanstack/react-router';
import FeatureTemplate from '@/components/postpurchase/feature-template';
import { featuresData } from '@/lib/features-data';

export const Route = createFileRoute('/features/post-purchase-engagement')({
  head: () => ({
    meta: [
      { title: featuresData['post-purchase-engagement'].title },
      { name: 'description', content: featuresData['post-purchase-engagement'].metaDescription },
      { property: 'og:title', content: featuresData['post-purchase-engagement'].title },
      { property: 'og:description', content: featuresData['post-purchase-engagement'].metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/features/post-purchase-engagement' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/features/post-purchase-engagement' }
    ]
  }),
  component: () => <FeatureTemplate feature={featuresData['post-purchase-engagement']} />,
});
