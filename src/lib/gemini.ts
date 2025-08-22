import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, ChatSession, Content } from "@google/generative-ai";
import { properties } from "../data/mockData";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("VITE_GEMINI_API_KEY is not set in the environment variables.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `You are a friendly and professional real estate assistant for a company called PrimeEstates. Your goal is to help users find properties from the provided list.

Here is the list of available properties in JSON format. Use this as your ONLY source of information. Do not invent properties.
\`\`\`json
${JSON.stringify(properties, null, 2)}
\`\`\`

Your tasks:
1.  Engage users in a friendly, conversational manner.
2.  Answer user queries about available properties based ONLY on the JSON data provided.
3.  If a user asks for something not in the data, politely inform them you couldn't find a match and suggest alternatives based on what is available. For example, if they ask for a 6 BHK and you only have up to 5, mention that.
4.  When presenting properties, mention key details like title, price, city, and BHK.
5.  Keep your responses concise and helpful.
6.  If the user's query is vague, ask clarifying questions to narrow down their search (e.g., "What city are you interested in?", "How many bedrooms are you looking for?").
7.  Do not respond to questions that are not related to real estate. Politely steer the conversation back to finding a property.
`,
});

const generationConfig = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048,
};

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

export function startChat(history: Content[]): ChatSession {
  return model.startChat({
    generationConfig,
    safetySettings,
    history,
  });
}
