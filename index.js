import { config } from 'dotenv';
config();

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

const chatCompletion = await openai.chat.completions
  .create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Hello!' }],
  })
  .then((res) => {
    console.log(res);
  });
console.log(chatCompletion.choices[0].message);
