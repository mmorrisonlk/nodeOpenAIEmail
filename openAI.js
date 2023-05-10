require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: process.env.OPEN_AI_ORG,
    apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);
let response;

async function makeRequest(incomingText) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "Say hi"}],
      });
    incomingText = completion.data.choices[0].message.content
    console.log("response", incomingText);
    return incomingText
}

module.exports = makeRequest;