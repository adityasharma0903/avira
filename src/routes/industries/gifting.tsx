import { createFileRoute } from '@tanstack/react-router';
import IndustryTemplate from '@/components/postpurchase/industry-template';
import { industriesData } from '@/lib/industries-data';

export const Route = createFileRoute('/industries/gifting')({
  head: () => ({
    meta: [
      { title: industriesData.gifting.title },
      { name: 'description', content: industriesData.gifting.metaDescription },
      { property: 'og:title', content: industriesData.gifting.title },
      { property: 'og:description', content: industriesData.gifting.metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/industries/gifting' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/industries/gifting' }
    ]
  }),
  component: () => <IndustryTemplate industry={industriesData.gifting} />,
});
