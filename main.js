const fs = require('fs');
require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const makeRequest = require('./openAI');
const prompt = require("prompt-sync")({ sigint: true });

let email;

async function getEmail() {
  const data = fs.readFileSync('./email.json', 'utf8');
  email = JSON.parse(data)
}

const chatPrompt = prompt("What do you want ChatGPT to do?");

async function updateText() {
  let { subject, text } = email;
  text = await makeRequest(text, chatPrompt);
  console.log("text", text);
  let updateBody = { "subject": subject, "text": text};
  fs.writeFileSync('./email.json', JSON.stringify(updateBody));
}


getEmail();
console.log(email);
updateText();

