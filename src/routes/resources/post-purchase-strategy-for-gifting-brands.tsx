import { createFileRoute } from '@tanstack/react-router';
import ResourceTemplate from '@/components/postpurchase/resource-template';
import { resourcesData } from '@/lib/resources-data';

export const Route = createFileRoute('/resources/post-purchase-strategy-for-gifting-brands')({
  head: () => ({
    meta: [
      { title: resourcesData['post-purchase-strategy-for-gifting-brands'].title },
      { name: 'description', content: resourcesData['post-purchase-strategy-for-gifting-brands'].metaDescription },
      { property: 'og:title', content: resourcesData['post-purchase-strategy-for-gifting-brands'].title },
      { property: 'og:description', content: resourcesData['post-purchase-strategy-for-gifting-brands'].metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/resources/post-purchase-strategy-for-gifting-brands' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/resources/post-purchase-strategy-for-gifting-brands' }
    ]
  }),
  component: () => <ResourceTemplate resource={resourcesData['post-purchase-strategy-for-gifting-brands']} />,
});
