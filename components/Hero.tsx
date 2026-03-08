/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useRef, useCallback } from 'react';

interface HeroProps {
  onBookNow?: () => void;
  onBookNowHover?: () => void;
}

/**
 * HERO VIDEO LOADING TIMEOUT (ms)
 * If the video hasn't signaled readiness within this window, we reveal
 * whatever state we have so users never stare at a black screen.
 */
const VIDEO_READY_TIMEOUT_MS = 8000;

const Hero: React.FC<HeroProps> = ({ onBookNow, onBookNowHover }) => {
  const [videoReady, setVideoReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const readyRef = useRef(false); // avoids stale closures in event callbacks

  // Mark video as ready (idempotent -- safe to call multiple times)
  const markVideoReady = useCallback(() => {
    if (readyRef.current) return;
    readyRef.current = true;
    setVideoReady(true);
  }, []);

  // Entrance animation delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ---- Core video bootstrap ----
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force attributes for maximum mobile compatibility
    video.setAttribute('playsinline', 'true');
    video.setAttribute('muted', 'true');
    video.setAttribute('autoplay', 'true');
    video.setAttribute('loop', 'true');

    // Use metadata-only preload: the browser fetches duration/dimensions but
    // does NOT eagerly download the entire 80 MB file.  Playback will stream
    // on-demand once play() is called.
    video.setAttribute('preload', 'metadata');

    video.removeAttribute('controls');
    video.controls = false;

    // Disable any text-track overlays
    if (video.textTracks) {
      Array.from(video.textTracks).forEach(track => {
        track.mode = 'disabled';
      });
    }

    // --- Play helper ---
    const forcePlay = async () => {
      try {
        video.muted = true;
        video.volume = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          await playPromise;
          // Play succeeded -- reveal the video
          markVideoReady();
        }
      } catch {
        // Autoplay blocked or not enough data yet -- retry once
        setTimeout(() => {
          video.muted = true;
          video.play()
            .then(() => markVideoReady())
            .catch(() => {
              // Truly blocked (e.g. low-power mode). The timeout fallback
              // below will reveal the placeholder instead.
            });
        }, 500);
      }
    };

    // Initial play attempt
    forcePlay();

    // Listen for both canplay and playing as independent reveal signals.
    // - canplay: browser has enough data to start playback (even if paused)
    // - playing: playback has actually started (covers autoplay success)
    const handleCanPlay = () => {
      // Only mark ready via canplay if the video is not paused (i.e., it is
      // actually going to render frames).  If autoplay was blocked the video
      // could reach canplay while still paused -- we don't want to reveal a
      // frozen frame in that case.
      if (!video.paused) {
        markVideoReady();
      }
    };
    const handlePlaying = () => markVideoReady();

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('playing', handlePlaying);

    // Re-attempt play on metadata events (helps some mobile browsers)
    const handleMetadataLoaded = () => { forcePlay(); };
    video.addEventListener('loadedmetadata', handleMetadataLoaded);

    // Visibility change: resume playback when tab becomes active
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        forcePlay();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Prevent accidental pause on mobile (some browsers pause on scroll)
    const handlePause = (e: Event) => {
      e.preventDefault();
      if (video.paused) {
        forcePlay();
      }
    };
    video.addEventListener('pause', handlePause);

    // --- Timeout fallback ---
    // If after VIDEO_READY_TIMEOUT_MS the video still hasn't triggered ready,
    // reveal whatever we have.  On truly slow connections this means the user
    // sees the dark gradient placeholder with the text overlay rather than a
    // blank screen forever.
    const timeoutId = setTimeout(() => {
      if (!readyRef.current) {
        // Check if video has any data at all
        if (video.readyState >= 2) {
          // HAVE_CURRENT_DATA or better -- show it
          markVideoReady();
        } else {
          // Video is still not playable.  Mark as failed so the placeholder
          // gradient stays visible and the content is readable.
          setVideoFailed(true);
        }
      }
    }, VIDEO_READY_TIMEOUT_MS);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('loadedmetadata', handleMetadataLoaded);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      video.removeEventListener('pause', handlePause);
      clearTimeout(timeoutId);
    };
  }, [markVideoReady]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // If clicking "Pick Your Bus", trigger service menu
    if (targetId === 'fleet' && onBookNow) {
      onBookNow();
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Determine whether the video layer should be visible.
  // Show at 60% opacity once ready; keep hidden while loading.
  const showVideo = videoReady && !videoFailed;

  return (
    <section className="relative w-full h-screen min-h-[700px] lg:min-h-[800px] overflow-hidden bg-gray-900">

      {/* Background Video - Party Bus Hero Video */}
      <div className="absolute inset-0 w-full h-full">

        {/* Animated placeholder gradient visible while video loads.
            Uses the brand dark palette so it looks intentional, not broken.
            A subtle pulse animation gives a "loading" feel without a spinner. */}
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            showVideo ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          {/* Subtle animated shimmer while loading -- disappears when video is up */}
          {!videoReady && !videoFailed && (
            <div className="absolute inset-0 opacity-30 animate-pulse bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          )}
        </div>

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          className={`w-full h-full object-cover mobile-video-no-controls transition-[opacity,visibility] duration-1000 ${
            showVideo ? 'visible opacity-60' : 'invisible opacity-0'
          }`}
          style={{
            pointerEvents: 'none',
          } as React.CSSProperties}
          aria-hidden="true"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Enhanced gradient overlays -- always visible on top of both
            the placeholder and the video for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/10 via-transparent to-[#b9ff66]/10"></div>
      </div>

      {/* Content - spacer reserves navbar height so headline clears; content centered in remaining space */}
      <div className="relative z-10 h-full flex flex-col items-center text-center px-4 sm:px-6">
        <div className="h-20 md:h-24 lg:h-28 flex-shrink-0" aria-hidden />
        <div className={`flex-1 flex flex-col justify-center items-center w-full max-w-5xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Main headline - sized to prevent navbar cutoff on desktop */}
          <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[9rem] xl:text-[10rem] font-black text-white leading-[0.9] lg:leading-[1.1] mb-6 sm:mb-8 drop-shadow-2xl font-['Bebas_Neue'] tracking-tight">
            {"LET THE GOOD ".split('').map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-wave-cascade"
                style={{
                  animationDelay: `${index * 40}ms`,
                  opacity: 0
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
            <br/>
            <span className="text-[#FF6B00] drop-shadow-[0_0_30px_rgba(255,107,0,0.6)]">
              {"TIMES ROLL".split('').map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-wave-cascade"
                  style={{
                    animationDelay: `${(index + 12) * 40}ms`,
                    opacity: 0
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </h1>

          {/* Location badge - between TIMES ROLL and subtitle */}
          <div className="text-base sm:text-xl md:text-2xl font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#b9ff66] mb-6 sm:mb-8 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)] text-center">
            <div className="block">
              {"Houma \u2022 Thibodaux".split('').map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-wave-cascade"
                  style={{
                    animationDelay: `${(index + 22) * 40}ms`,
                    opacity: 0
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>
            <div className="block mt-2">
              {"New Orleans".split('').map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-wave-cascade"
                  style={{
                    animationDelay: `${(index + 38) * 40}ms`,
                    opacity: 0
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>
          </div>

          {/* Subtitle with better spacing */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 font-medium mb-6 sm:mb-8 drop-shadow-lg px-4 leading-relaxed animate-subtitle-fade"
             style={{ animationDelay: '1s', opacity: 0 }}>
            The wildest party buses in South Louisiana. <br className="hidden sm:block"/>
            <span className="text-[#b9ff66] font-bold">Loud music, good vibes, and unforgettable nights.</span>
          </p>

          {/* CTA Buttons with enhanced effects */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4 animate-buttons-slide"
               style={{ animationDelay: '1.4s', opacity: 0 }}>
            <a
                href="#fleet"
                onClick={(e) => handleNavClick(e, 'fleet')}
                onMouseEnter={onBookNowHover}
                onFocus={onBookNowHover}
                className="group relative px-7 sm:px-9 py-3.5 sm:py-4 min-h-[52px] bg-[#FF6B00] text-white -skew-x-12 hover:bg-[#ff8533] transition-all duration-300 shadow-[0_0_30px_rgba(255,107,0,0.5)] hover:shadow-[0_0_50px_rgba(255,107,0,0.9)] flex items-center justify-center transform hover:scale-[1.03] active:scale-[0.98] overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF6B00]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
                {/* Button glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></span>

                <span className="block skew-x-12 text-base sm:text-lg font-bold tracking-[0.2em] uppercase relative z-10">
                  Pick Your Bus
                </span>
            </a>
            <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="group relative px-7 sm:px-9 py-3.5 sm:py-4 min-h-[52px] bg-transparent border-3 border-white text-white -skew-x-12 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center transform hover:scale-[1.03] active:scale-[0.98] overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
                {/* Border glow on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]"></span>

                <span className="block skew-x-12 text-base sm:text-lg font-bold tracking-[0.2em] uppercase relative z-10">
                  Learn More
                </span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-10 text-sm sm:text-base text-white/80 font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2 hover:text-[#b9ff66] transition-colors duration-300 animate-trust-pop"
                 style={{ animationDelay: '1.8s', opacity: 0 }}>
              <span className="text-xl sm:text-2xl">&#9889;</span>
              <span>Instant Booking</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#b9ff66] transition-colors duration-300 animate-trust-pop"
                 style={{ animationDelay: '2s', opacity: 0 }}>
              <span className="text-xl sm:text-2xl">&#127881;</span>
              <span>6 Party Buses</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#b9ff66] transition-colors duration-300 animate-trust-pop"
                 style={{ animationDelay: '2.2s', opacity: 0 }}>
              <span className="text-xl sm:text-2xl">&#128274;</span>
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
