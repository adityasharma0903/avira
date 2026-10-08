import { createFileRoute } from '@tanstack/react-router';
import { PrivacyPage } from '@/components/postpurchase/trust-pages';

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy | AVIRA D2C' },
      { name: 'description', content: 'AVIRA privacy policy, data protection standards, and consumer privacy commitments.' },
      { property: 'og:url', content: 'https://avirad2c.app/privacy' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/privacy' }
    ]
  }),
  component: PrivacyPage,
});
