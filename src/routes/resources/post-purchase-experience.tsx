import { createFileRoute } from '@tanstack/react-router';
import ResourceTemplate from '@/components/postpurchase/resource-template';
import { resourcesData } from '@/lib/resources-data';

export const Route = createFileRoute('/resources/post-purchase-experience')({
  head: () => ({
    meta: [
      { title: resourcesData['post-purchase-experience'].title },
      { name: 'description', content: resourcesData['post-purchase-experience'].metaDescription },
      { property: 'og:title', content: resourcesData['post-purchase-experience'].title },
      { property: 'og:description', content: resourcesData['post-purchase-experience'].metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/resources/post-purchase-experience' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/resources/post-purchase-experience' }
    ]
  }),
  component: () => <ResourceTemplate resource={resourcesData['post-purchase-experience']} />,
});
