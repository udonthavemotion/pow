/**
 * Custom hook for confetti celebrations
 * Provides themed confetti effects for Party On Wheels
 */

import confetti from 'canvas-confetti';

interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  scalar?: number;
}

export const useConfetti = () => {
  // Party On Wheels themed confetti (orange and green colors)
  const celebrateBooking = (options: ConfettiOptions = {}) => {
    const defaults = {
      particleCount: 100,
      spread: 70,
      startVelocity: 30,
      decay: 0.9,
      scalar: 1.2,
    };

    const opts = { ...defaults, ...options };

    // First burst - orange theme
    confetti({
      ...opts,
      origin: { x: 0.25, y: 0.5 },
      colors: ['#FF6B00', '#ff8533', '#ffa366', '#FFFFFF'],
      angle: 60,
    });

    // Second burst - green theme
    confetti({
      ...opts,
      origin: { x: 0.75, y: 0.5 },
      colors: ['#39FF14', '#5fff47', '#85ff7a', '#FFFFFF'],
      angle: 120,
    });

    // Center burst
    setTimeout(() => {
      confetti({
        ...opts,
        particleCount: 50,
        origin: { x: 0.5, y: 0.3 },
        colors: ['#FF6B00', '#39FF14', '#FFFFFF'],
        spread: 100,
        startVelocity: 45,
      });
    }, 200);
  };

  // Continuous confetti rain
  const confettiRain = (duration: number = 3000) => {
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0 },
        colors: ['#FF6B00', '#39FF14'],
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0 },
        colors: ['#FF6B00', '#39FF14'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  // Simple single burst
  const simpleBurst = () => {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FF6B00', '#39FF14', '#FFFFFF'],
    });
  };

  return {
    celebrateBooking,
    confettiRain,
    simpleBurst,
  };
};
