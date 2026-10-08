import { createFileRoute } from '@tanstack/react-router';
import FeatureTemplate from '@/components/postpurchase/feature-template';
import { featuresData } from '@/lib/features-data';

export const Route = createFileRoute('/features/reviews')({
  head: () => ({
    meta: [
      { title: featuresData.reviews.title },
      { name: 'description', content: featuresData.reviews.metaDescription },
      { property: 'og:title', content: featuresData.reviews.title },
      { property: 'og:description', content: featuresData.reviews.metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/features/reviews' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/features/reviews' }
    ]
  }),
  component: () => <FeatureTemplate feature={featuresData.reviews} />,
});
