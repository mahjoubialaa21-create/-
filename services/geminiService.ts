
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async sendMessage(message: string, history: { role: 'user' | 'model', text: string }[]) {
    const chat = this.ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: `أنت مساعد ذكي لموقع تعليمي يتحدث عن "الحرب وآثارها وحلولها". 
        الموقع من إعداد الطالبة الاء المحجوبي، مريم الزواري، وملاك مخلوف (تاسعة أساسي 1).
        مهمتك هي الإجابة على أسئلة الزوار حول أسباب الحروب، آثارها على الأطفال والنساء والمجتمع، والحلول الممكنة لتحقيق السلام.
        تحدث باللغة العربية بأسلوب رسمي ومحفز للسلام.`,
      },
    });

    // In this specific SDK, sendMessage handles history internally if used through the chat object
    // but we can pass the latest message.
    const response = await chat.sendMessage({ message });
    return response.text;
  }
}

export const geminiService = new GeminiService();
