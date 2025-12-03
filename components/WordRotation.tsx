/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import './WordRotation.css';

interface WordRotationProps {
  words: string[];
  staticText?: string;
  className?: string;
  variant?: 'light-bg' | 'dark-bg' | 'gray-900-bg';
  speed?: 'fast' | 'normal' | 'slow';
  glow?: boolean;
}

/**
 * WordRotation Component
 * 
 * Displays rotating words with smooth fade transitions using CSS-only animation.
 * Perfect for rotating through different event types, features, or messages.
 * 
 * @param words - Array of words to rotate through (minimum 2, recommended 3-6)
 * @param staticText - Optional static text to display before the rotating words
 * @param className - Additional CSS classes
 * @param variant - Background variant for fade mask ('light-bg', 'dark-bg', 'gray-900-bg')
 * @param speed - Animation speed ('fast', 'normal', 'slow')
 * @param glow - Add text glow effect
 */
export const WordRotation: React.FC<WordRotationProps> = ({
  words,
  staticText,
  className = '',
  variant = 'gray-900-bg',
  speed = 'normal',
  glow = false
}) => {
  // Ensure we have at least 2 words
  if (!words || words.length < 2) {
    console.warn('WordRotation: At least 2 words are required');
    return <span>{words?.[0] || ''}</span>;
  }

  // Duplicate first word at the end for seamless loop
  const wordsWithLoop = [...words, words[0]];

  const speedClass = speed !== 'normal' ? speed : '';
  const glowClass = glow ? 'glow' : '';

  return (
    <span className={`word-loader ${className}`}>
      {staticText && (
        <span className="word-loader-static">{staticText} </span>
      )}
      <span className={`word-loader-dynamic ${variant} ${speedClass}`}>
        <span className="word-loader-words">
          {wordsWithLoop.map((word, index) => (
            <span key={`${word}-${index}`} className={`word-loader-word ${glowClass}`}>
              {word}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
};

export default WordRotation;

