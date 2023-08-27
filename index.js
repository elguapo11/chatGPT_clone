import { config } from 'dotenv';
config();

import OpenAI from 'openai';
import readline from 'readline';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

userInterface.on('line', async (input) => {
  await openai.chat.completions
    .create({
      model: 'gpt-3.5-turbo',
      user: 'user',
      max_tokens: 60,
      messages: [
        {
          role: 'user',
          content: `${input}`,
        },
      ],
    })
    .then((res) => {
      console.log(res.choices[0].message.content);
      console.log(
        `\n{ This reply has costed you ${res.usage.total_tokens} tokens }`
      );
    });
});

const chatCompletion = function chat(reply) {
  openai.chat.completions
    .create({
      model: 'gpt-3.5-turbo',
      max_tokens: 30,
      messages: [
        {
          role: 'user',
          content: `${reply}`,
        },
      ],
    })
    .then((res) => {
      console.log(res.choices[0].message.content);
      console.log(
        `'This test has costed you '${res.usage.total_tokens}'tokens'`
      );
    });
};
