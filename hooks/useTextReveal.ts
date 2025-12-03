/**
 * Custom hook for text reveal animations
 * Splits text into characters or words for staggered reveals
 */

import { useMemo } from 'react';

export type SplitType = 'chars' | 'words' | 'lines';

interface UseTextRevealOptions {
  text: string;
  splitType?: SplitType;
}

export const useTextReveal = ({ text, splitType = 'chars' }: UseTextRevealOptions) => {
  const elements = useMemo(() => {
    switch (splitType) {
      case 'chars':
        return text.split('');
      case 'words':
        return text.split(' ');
      case 'lines':
        return text.split('\n');
      default:
        return text.split('');
    }
  }, [text, splitType]);

  return { elements, splitType };
};
