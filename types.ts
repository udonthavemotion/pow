/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Bus {
  id: string;
  name: string;
  tagline: string;
  description: string;
  hourlyRate: number;
  /** Only set for vehicles that advertise a minimum booking length (e.g. Rackz, Skittles). */
  minHours?: number;
  capacity: number;
  imageUrl: string;
  images?: string[]; // Array of images for alternating display on card
  gallery?: string[];
  features: string[];
  nameColor?: string; // Color to match the actual bus color
  // Paste your GoHighLevel Embed Code (iframe) into this string in constants.ts
  calendarEmbedCode?: string;
}

export interface EventItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'bus', bus: Bus };

// Placeholder types for unused components
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  longDescription?: string;
  features: string[];
}

export interface JournalArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string | React.ReactNode;
}
