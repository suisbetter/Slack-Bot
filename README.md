# My First Slack Bot

Hey! This is my first Slack bot project, built using Node.js and the `@slack/bolt` framework with Socket Mode.

I built this bot for my Slack workspace to learn how slash commands work and how to integrate external APIs into chat apps.

## What it does

The bot listens for a few custom slash commands:

- `/bot_name-catfact` - Fetches and sends a random cat fact from the Cat Facts API.
- `/bot_name-joke` - Sends a random joke (setup and punchline) from the Official Joke API.
- `/slk` - Pings the bot and calculates response latency in milliseconds.
- `/bot_name-help` - Shows a quick summary of the commands.

## How to run it

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with your Slack app tokens:
   ```env
   SLACK_BOT_TOKEN=xoxb-...
   SLACK_APP_TOKEN=xapp-...
   ```

3. Start the bot:
   ```bash
   node index.js
   ```

You will see `bot is running!` in your terminal once it successfully connects.

## How it works

The bot uses Slack's Bolt SDK configured in Socket Mode, which means Slack pushes events directly over a WebSocket connection without needing a public IP or ngrok tunnel. When a slash command triggers, the bot acknowledges the request (`ack()`), calls the corresponding API using `axios`, and replies back to the channel with `respond()`.
