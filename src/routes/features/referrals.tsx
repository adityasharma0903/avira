import { createFileRoute } from '@tanstack/react-router';
import FeatureTemplate from '@/components/postpurchase/feature-template';
import { featuresData } from '@/lib/features-data';

export const Route = createFileRoute('/features/referrals')({
  head: () => ({
    meta: [
      { title: featuresData.referrals.title },
      { name: 'description', content: featuresData.referrals.metaDescription },
      { property: 'og:title', content: featuresData.referrals.title },
      { property: 'og:description', content: featuresData.referrals.metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/features/referrals' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/features/referrals' }
    ]
  }),
  component: () => <FeatureTemplate feature={featuresData.referrals} />,
});
