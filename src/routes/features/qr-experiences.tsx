import { createFileRoute } from '@tanstack/react-router';
import FeatureTemplate from '@/components/postpurchase/feature-template';
import { featuresData } from '@/lib/features-data';

export const Route = createFileRoute('/features/qr-experiences')({
  head: () => ({
    meta: [
      { title: featuresData['qr-experiences'].title },
      { name: 'description', content: featuresData['qr-experiences'].metaDescription },
      { property: 'og:title', content: featuresData['qr-experiences'].title },
      { property: 'og:description', content: featuresData['qr-experiences'].metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/features/qr-experiences' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/features/qr-experiences' }
    ]
  }),
  component: () => <FeatureTemplate feature={featuresData['qr-experiences']} />,
});
