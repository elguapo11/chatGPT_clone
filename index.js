import { config } from 'dotenv';
config();

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

function chat(response) {
  openai.chat.completions
    .create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `${response}`,
        },
      ],
    })
    .then((res) => {
      console.log(res.choices[0].message.content);
      console.log(`${res.usage.total_tokens} ` + '' + 'number of tokens');
    });
}

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
      console.log(`${res.usage.total_tokens} ` + '' + 'number of tokens');
    });
};

chat('test');
chatCompletion('test 2');
