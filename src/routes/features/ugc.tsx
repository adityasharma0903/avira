import { createFileRoute } from '@tanstack/react-router';
import FeatureTemplate from '@/components/postpurchase/feature-template';
import { featuresData } from '@/lib/features-data';

export const Route = createFileRoute('/features/ugc')({
  head: () => ({
    meta: [
      { title: featuresData.ugc.title },
      { name: 'description', content: featuresData.ugc.metaDescription },
      { property: 'og:title', content: featuresData.ugc.title },
      { property: 'og:description', content: featuresData.ugc.metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/features/ugc' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/features/ugc' }
    ]
  }),
  component: () => <FeatureTemplate feature={featuresData.ugc} />,
});
