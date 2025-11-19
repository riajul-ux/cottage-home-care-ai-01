import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let client: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing");
      throw new Error("API_KEY is not defined in environment variables");
    }
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

const getChatSession = (): Chat => {
  if (!chatSession) {
    const ai = getClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncGenerator<string>> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessageStream({ message });

    async function* streamGenerator() {
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    }

    return streamGenerator();
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};

export const resetChat = () => {
  chatSession = null;
};