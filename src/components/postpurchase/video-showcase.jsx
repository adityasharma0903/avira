import { useState, useRef, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, ArrowRight, ArrowUpRight, CheckCircle2, QrCode, Smartphone, RefreshCw, Box } from 'lucide-react';
import { Button, Reveal } from './elements';

export default function VideoShowcase() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    // Attempt autoplay safely
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      containerRef.current.requestFullscreen().catch(() => {});
    }
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-8 border-b border-border/70 relative overflow-hidden bg-background">
      {/* Subtle ambient gradient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto">
        {/* Header Content */}
        <Reveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper border border-border shadow-xs mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-foreground/80 font-sans">
              PRODUCT WALKTHROUGH • 40S FILM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight leading-[1.15] mb-5">
            From physical unboxing to <br className="hidden sm:inline" />
            <i className="italic font-normal">measurable digital growth.</i>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans max-w-2xl mx-auto">
            Watch how AVIRA transforms ordinary packaging into an interactive brand portal — collecting customer feedback, capturing authentic UGC, and driving repeat orders on autopilot.
          </p>
        </Reveal>

        {/* Cinematic Video Showcase Frame */}
        <Reveal className="relative group max-w-5xl mx-auto">
          {/* Card Border / Frame wrapper */}
          <div
            ref={containerRef}
            className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-border/80 bg-stone-900 shadow-2xl shadow-stone-900/15"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/videos/finalwebsitevideo.mp4"
              className="w-full h-full object-cover cursor-pointer"
              playsInline
              autoPlay
              loop
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Top Bar Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-xs font-medium tracking-wide">
                <Box size={13} className="text-emerald-400" />
                AVIRA Post-Purchase Platform
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/80 text-[11px] font-mono tracking-wider">
                1080P HD
              </span>
            </div>

            {/* Central Play/Pause Watermark on Pause */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xs transition-opacity z-20 pointer-events-none">
                <div className="h-18 w-18 sm:h-20 sm:w-20 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-xl transform scale-100 transition-transform">
                  <Play size={32} className="ml-1 fill-stone-900" />
                </div>
              </div>
            )}

            {/* Floating Bottom Control Bar */}
            <div 
              className={`absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl sm:rounded-2xl border border-white/10 transition-opacity duration-300 z-30 ${
                showControls || !isPlaying ? 'opacity-100' : 'opacity-0 sm:group-hover:opacity-100'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Play'}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5 fill-white" />}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title={isMuted ? 'Unmute' : 'Mute'}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>

                <span className="text-[11px] sm:text-xs text-white/70 font-sans tracking-wide hidden sm:inline">
                  {isMuted ? 'Muted by default • Click to unmute' : 'Audio enabled'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      videoRef.current.play();
                      setIsPlaying(true);
                    }
                  }}
                  className="h-8 px-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white/90 text-xs flex items-center gap-1 transition-colors cursor-pointer"
                  title="Restart Video"
                >
                  <RefreshCw size={12} />
                  <span className="hidden md:inline">Restart</span>
                </button>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="h-8 w-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Toggle Fullscreen"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3 Value Proposition Highlight Cards Underneath */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-5xl mx-auto">
          <Reveal className="p-6 rounded-2xl bg-paper border border-border/80 shadow-xs hover:border-primary/40 transition-colors">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Box size={20} />
            </div>
            <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-primary block mb-1">
              01 / The Physical Card
            </span>
            <h3 className="font-display font-medium text-lg text-foreground mb-2">
              Premium Unboxing Insert
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every package arrives with an elegant, brand-customized invitation card that customers genuinely want to scan.
            </p>
          </Reveal>

          <Reveal className="p-6 rounded-2xl bg-paper border border-border/80 shadow-xs hover:border-primary/40 transition-colors">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Smartphone size={20} />
            </div>
            <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-primary block mb-1">
              02 / Zero-Friction Scan
            </span>
            <h3 className="font-display font-medium text-lg text-foreground mb-2">
              Instant Web Portal
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Opens in 1 second on mobile without downloading any app. Customers share photos, leave reviews, and claim perks immediately.
            </p>
          </Reveal>

          <Reveal className="p-6 rounded-2xl bg-paper border border-border/80 shadow-xs hover:border-primary/40 transition-colors">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Sparkles size={20} />
            </div>
            <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-primary block mb-1">
              03 / Next Purchase Loop
            </span>
            <h3 className="font-display font-medium text-lg text-foreground mb-2">
              Automated Retention
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Reward buyers and gift recipients with store credit, referral coupons, and targeted incentives that trigger repeat orders.
            </p>
          </Reveal>
        </div>

        {/* Quick Action Footer */}
        <Reveal className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
          <Button variant="ivory" asChild>
            <Link to="/start-free">
              Start Free Pilot <ArrowUpRight size={14} className="ml-1" />
            </Link>
          </Button>
          <Button variant="lightOutline" asChild>
            <Link to="/demo">
              Try Interactive Experience <ArrowRight size={14} className="ml-1" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
