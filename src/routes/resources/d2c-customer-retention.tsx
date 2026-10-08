import { createFileRoute } from '@tanstack/react-router';
import ResourceTemplate from '@/components/postpurchase/resource-template';
import { resourcesData } from '@/lib/resources-data';

export const Route = createFileRoute('/resources/d2c-customer-retention')({
  head: () => ({
    meta: [
      { title: resourcesData['d2c-customer-retention'].title },
      { name: 'description', content: resourcesData['d2c-customer-retention'].metaDescription },
      { property: 'og:title', content: resourcesData['d2c-customer-retention'].title },
      { property: 'og:description', content: resourcesData['d2c-customer-retention'].metaDescription },
      { property: 'og:url', content: 'https://avirad2c.app/resources/d2c-customer-retention' },
    ],
    links: [
      { rel: 'canonical', href: 'https://avirad2c.app/resources/d2c-customer-retention' }
    ]
  }),
  component: () => <ResourceTemplate resource={resourcesData['d2c-customer-retention']} />,
});
