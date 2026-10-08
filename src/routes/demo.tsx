import { createFileRoute } from '@tanstack/react-router';
import Demo from '@/components/postpurchase/demo';
export const Route = createFileRoute('/demo')({
 head: () => ({ meta: [
 { title: 'Experience AVIRA — Interactive product demo' },
 { name: 'description', content: 'Follow an order from delivery to QR engagement, customer content, rewards and repeat purchase in the interactive AVIRA demo.' },
 { property: 'og:title', content: 'Experience AVIRA — Follow the order' },
 { property: 'og:description', content: 'Try the complete customer journey and watch merchant results update.' },
 { property: 'og:type', content: 'website' },
 { name: 'twitter:card', content: 'summary_large_image' }
 ] }),
 component: Demo,
});
