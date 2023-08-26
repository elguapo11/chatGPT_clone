import { config } from 'dotenv';
config();

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

const chatCompletion = openai.chat.completions
  .create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'Who are you?',
      },
    ],
  })
  .then((res) => {
    console.log(res.choices[0].message.content);
    console.log(`${res.usage.total_tokens} ` + 'number of tokens');
  });
