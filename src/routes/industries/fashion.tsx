import { createFileRoute } from '@tanstack/react-router';
import IndustryTemplate from '@/components/postpurchase/industry-template';
import { industriesData } from '@/lib/industries-data';

export const Route = createFileRoute('/industries/fashion')({
  head: () => ({
    meta: [
      { title: industriesData.fashion.title },
      { name: 'description', content: industriesData.fashion.metaDescription },
      { property: 'og:title', content: industriesData.fashion.title },
      { property: 'og:description', content: industriesData.fashion.metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/industries/fashion' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/industries/fashion' }
    ]
  }),
  component: () => <IndustryTemplate industry={industriesData.fashion} />,
});
