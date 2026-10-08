import { createFileRoute } from '@tanstack/react-router';
import IndustryTemplate from '@/components/postpurchase/industry-template';
import { industriesData } from '@/lib/industries-data';

export const Route = createFileRoute('/industries/d2c')({
  head: () => ({
    meta: [
      { title: industriesData.d2c.title },
      { name: 'description', content: industriesData.d2c.metaDescription },
      { property: 'og:title', content: industriesData.d2c.title },
      { property: 'og:description', content: industriesData.d2c.metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/industries/d2c' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/industries/d2c' }
    ]
  }),
  component: () => <IndustryTemplate industry={industriesData.d2c} />,
});
