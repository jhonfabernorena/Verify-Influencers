export const AIConfig = {
    apiKey: process.env.AI_API_KEY || 'default-api-key',
    model: 'gpt-4',
    endpoint: 'https://api.openai.com/v1/engines/gpt-4/completions',
    maxTokens: 500,
    temperature: 0.7,
    topP: 0.9,
    frequencyPenalty: 0,
    presencePenalty: 0,
  };