import { createFileRoute } from '@tanstack/react-router';
import IndustryTemplate from '@/components/postpurchase/industry-template';
import { industriesData } from '@/lib/industries-data';

export const Route = createFileRoute('/industries/beauty')({
  head: () => ({
    meta: [
      { title: industriesData.beauty.title },
      { name: 'description', content: industriesData.beauty.metaDescription },
      { property: 'og:title', content: industriesData.beauty.title },
      { property: 'og:description', content: industriesData.beauty.metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/industries/beauty' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/industries/beauty' }
    ]
  }),
  component: () => <IndustryTemplate industry={industriesData.beauty} />,
});
