import { useEffect, useRef } from 'react';
import burgerVideo from '../assets/videos/burger.mp4';

/**
 * Floating hero visual. The burger clip screen-blends into a backdrop that
 * mirrors the page background, so its black frame vanishes and the warm
 * glow shines through — no visible rectangle, just the burger in space.
 * Muted + playsInline so autoplay works everywhere; playback is paused on
 * unmount so the decoder doesn't keep running off-screen.
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Drive playback from visibility rather than a one-shot play():
    // Chromium pauses offscreen muted autoplay videos to save power, and
    // StrictMode's mount → cleanup → remount cycle cancels the autoPlay
    // attribute. Observing keeps it playing whenever it's actually seen
    // and parked when it isn't.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay blocked — poster frame still shows */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <div className="hero-visual">
      {/* mix-blend-mode composites against the nearest stacking context,
          which can't see the section behind us — this layer stands in for
          the page background so black video pixels resolve to it. */}
      <div className="hero-visual-backdrop" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Burger being assembled, layer by layer"
      >
        <source src={burgerVideo} type="video/mp4" />
      </video>
    </div>
  );
}
