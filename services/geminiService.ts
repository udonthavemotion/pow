/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { BUSES } from '../constants';

const getSystemInstruction = () => {
  const busContext = BUSES.map(b => 
    `- ${b.name} ($${b.hourlyRate}/hr): ${b.description}. Capacity: ${b.capacity}. Features: ${b.features.join(', ')}`
  ).join('\n');

  return `You are the AI Concierge for "Party On Wheels", a party bus rental company in Houma, Louisiana owned by Deric Hebert.
  
  Your tone is high-energy, friendly, Southern, and helpful. You want people to have a good time.
  
  Here is our fleet info:
  ${busContext}
  
  Common questions:
  - We serve Houma, Thibodaux, and New Orleans areas.
  - Minimum rental time is usually 4 hours.
  - Alcohol is allowed (BYOB) for passengers over 21.
  
  If they ask to book, tell them to close the chat and click "Book This Bus" on the specific bus card to see the calendar.
  Keep answers concise (under 3 sentences usually).`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "Whoops! I can't connect to the mothership right now. (Missing API Key)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hold up, I'm having trouble hearing you over the music. Try again in a second.";
  }
};