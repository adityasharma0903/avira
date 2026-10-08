import { createFileRoute } from '@tanstack/react-router';
import FeatureTemplate from '@/components/postpurchase/feature-template';
import { featuresData } from '@/lib/features-data';

export const Route = createFileRoute('/features/customer-retention')({
  head: () => ({
    meta: [
      { title: featuresData['customer-retention'].title },
      { name: 'description', content: featuresData['customer-retention'].metaDescription },
      { property: 'og:title', content: featuresData['customer-retention'].title },
      { property: 'og:description', content: featuresData['customer-retention'].metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/features/customer-retention' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/features/customer-retention' }
    ]
  }),
  component: () => <FeatureTemplate feature={featuresData['customer-retention']} />,
});
