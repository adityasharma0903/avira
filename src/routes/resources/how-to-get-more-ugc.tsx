import { createFileRoute } from '@tanstack/react-router';
import ResourceTemplate from '@/components/postpurchase/resource-template';
import { resourcesData } from '@/lib/resources-data';

export const Route = createFileRoute('/resources/how-to-get-more-ugc')({
  head: () => ({
    meta: [
      { title: resourcesData['how-to-get-more-ugc'].title },
      { name: 'description', content: resourcesData['how-to-get-more-ugc'].metaDescription },
      { property: 'og:title', content: resourcesData['how-to-get-more-ugc'].title },
      { property: 'og:description', content: resourcesData['how-to-get-more-ugc'].metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/resources/how-to-get-more-ugc' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/resources/how-to-get-more-ugc' }
    ]
  }),
  component: () => <ResourceTemplate resource={resourcesData['how-to-get-more-ugc']} />,
});
