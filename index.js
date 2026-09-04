require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/bot_name-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/bot_name-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

app.command("/bot_name-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/bot_name-ping (or /slk) - Check bot latency
/bot_name-catfact - Get a cat fact
/bot_name-joke - Get a random joke
/bot_name-help - List available commands`
  });
});

const handlePing = async ({ ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
};

app.command("/slk", handlePing);
app.command("/bot_name-ping", handlePing);

(async () => {
  await app.start();
  console.log("bot is running!");
})();