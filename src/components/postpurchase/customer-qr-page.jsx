import { useState } from 'react';
import { Link, useParams } from '@tanstack/react-router';
import { Header, Footer, RewardCard, Button, ArrowUpRight, Camera, Users, Star } from './elements';

export default function CustomerQrPage() {
  const { token } = useParams({ strict: false });
  const [selectedAction, setSelectedAction] = useState(null);
  const [completed, setCompleted] = useState(false);

  return (
    <div className="site-shell min-h-screen bg-background">
      <Header />
      
      <main className="max-w-md mx-auto px-4 py-12 text-center">
        {/* Unboxing Header */}
        <div className="mb-8">
          <span className="eyebrow tracking-widest text-xs font-semibold text-primary uppercase block mb-2">
            EXCLUSIVE UNBOXING REWARD
          </span>
          <h1 className="text-3xl font-display font-medium text-foreground mb-2">
            Thank you for your order.
          </h1>
          <p className="text-xs text-muted-foreground font-sans">
            Your package unlocked an exclusive perk. Choose how you'd like to participate.
          </p>
        </div>

        {!completed ? (
          <div className="space-y-4 text-left">
            <div 
              onClick={() => setSelectedAction('ugc')}
              className={`p-5 rounded-lg border cursor-pointer transition-all ${selectedAction === 'ugc' ? 'border-primary bg-primary/5' : 'border-border bg-paper'}`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Camera className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground font-sans">Share your experience</h3>
                  <p className="text-xs text-muted-foreground font-sans">Upload a quick unboxing clip or photo</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => setSelectedAction('referral')}
              className={`p-5 rounded-lg border cursor-pointer transition-all ${selectedAction === 'referral' ? 'border-primary bg-primary/5' : 'border-border bg-paper'}`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground font-sans">Refer a friend</h3>
                  <p className="text-xs text-muted-foreground font-sans">Give ₹150 off, get ₹150 off</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => setSelectedAction('review')}
              className={`p-5 rounded-lg border cursor-pointer transition-all ${selectedAction === 'review' ? 'border-primary bg-primary/5' : 'border-border bg-paper'}`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Star className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground font-sans">Leave an honest review</h3>
                  <p className="text-xs text-muted-foreground font-sans">Help other shoppers find their routine</p>
                </div>
              </div>
            </div>

            {selectedAction && (
              <Button 
                variant="default" 
                className="w-full mt-4" 
                onClick={() => setCompleted(true)}
              >
                Complete & Unlock Reward <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <RewardCard />
            <div className="p-4 rounded bg-primary/5 border border-primary/20 text-xs text-muted-foreground font-sans">
              Thank you for sharing your feedback! Your single-use discount has been minted and is ready to apply at checkout.
            </div>
            <Button variant="outline" asChild className="w-full">
              <Link to="/">Learn more about AVIRA Post-Purchase Platform</Link>
            </Button>
          </div>
        )}

        {/* Security badge */}
        <p className="text-[10px] text-muted-foreground font-sans uppercase tracking-widest mt-12">
          SESSION ID: {token ? token.slice(0, 8) + '...' : 'SECURE'} • POWERED BY AVIRA D2C
        </p>
      </main>

      <Footer />
    </div>
  );
}
