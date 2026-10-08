import { createFileRoute } from '@tanstack/react-router';
import FeatureTemplate from '@/components/postpurchase/feature-template';
import { featuresData } from '@/lib/features-data';

export const Route = createFileRoute('/features/repeat-purchases')({
  head: () => ({
    meta: [
      { title: featuresData['repeat-purchases'].title },
      { name: 'description', content: featuresData['repeat-purchases'].metaDescription },
      { property: 'og:title', content: featuresData['repeat-purchases'].title },
      { property: 'og:description', content: featuresData['repeat-purchases'].metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/features/repeat-purchases' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/features/repeat-purchases' }
    ]
  }),
  component: () => <FeatureTemplate feature={featuresData['repeat-purchases']} />,
});
