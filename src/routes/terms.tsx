import { createFileRoute } from '@tanstack/react-router';
import { TermsPage } from '@/components/postpurchase/trust-pages';

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms of Service | AVIRA D2C' },
      { name: 'description', content: 'AVIRA platform terms of service and commercial agreements.' },
      { property: 'og:url', content: 'https://avirad2c.app/terms' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/terms' }
    ]
  }),
  component: TermsPage,
});
