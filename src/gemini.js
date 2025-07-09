// geminiService.js
import { GoogleGenAI , HarmBlockThreshold,HarmCategory} from '@google/genai';

// **WARNING:** Storing API keys directly in code is generally not recommended for production.
// For demonstration purposes or very limited, secure environments, it can be used.
// For production, always use environment variables or a secure secret management system.
const API_KEY = "AIzaSyDIQpxQqIuof2SSYLoiYd0eNeHSTNN7sUA"; // Replace with your actual static API key
const generativeConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const ai = new GoogleGenAI({
  apiKey: API_KEY,
});

const model = 'gemini-1.5-flash';
const config = {
  responseMimeType: 'text/plain',
};

/**
 * Generates content using the Gemini AI model.
 * @param {string} prompt The text prompt to send to the AI.
 * @returns {Promise<string>} A promise that resolves to the generated text content.
 */
async function run(prompt) {
  try {
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];

    let generatedText = '';
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    for await (const chunk of response) {
      generatedText += chunk.text;
    }
    console.log(generatedText);
    return generatedText;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error; // Re-throw the error so the caller can handle it
  }
}
export default run;