const fs = require('fs');
require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const makeRequest = require('./openAI');

let email;

async function getEmail() {
  const data = fs.readFileSync('./email.json', 'utf8');
  email = JSON.parse(data)
}

async function updateText() {
  let { subject, text } = email;
  text = await makeRequest(text);
  console.log("text", text);
  let updateBody = { "subject": subject, "text": text};
  fs.writeFileSync('./email.json', JSON.stringify(updateBody));
}


getEmail();
console.log(email);
updateText();

