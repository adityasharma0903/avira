import { createFileRoute } from '@tanstack/react-router';
import Home from '@/components/postpurchase/home';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [
 { title: 'AVIRA — Turn every delivered order into your next customer' },
 { name: 'description', content: 'Transform packaging inserts into customer engagement, UGC, referrals and repeat purchases. Discover growth beyond delivery with AVIRA.' },
 { property: 'og:title', content: 'AVIRA — There’s more inside.' },
 { property: 'og:description', content: 'Your packaging is your next marketing channel. Connect every order to your next customer.' },
 { property: 'og:type', content: 'website' },
 { name: 'twitter:card', content: 'summary_large_image' }
 ] }),
 component: Home,
});
