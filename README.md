# Slack-Bot

A simple Slack bot built with Node.js and [Slack Bolt](https://slack.dev/bolt-js/) that responds to slash commands with cat facts, jokes, and a ping/latency check.

This is my first project — I'm still learning the ropes of building and deploying things, so bear with me.

## Features

- **Cat facts** — fetches a random fact from the [Cat Facts API](https://catfact.ninja/)
- **Jokes** — fetches a random joke from the [Official Joke API](https://official-joke-api.appspot.com/)
- **Ping** — replies with the bot's response latency
- **Help** — lists available commands
- Runs in [Socket Mode](https://api.slack.com/apis/socket-mode), so no public URL or web server is required

## Slash Commands

| Command | Description |
| --- | --- |
| `/bot_name-catfact` | Get a random cat fact |
| `/bot_name-joke` | Get a random joke (setup + punchline) |
| `/bot_name-help` | List available commands |
| `/slk` | Ping the bot and see its response latency |

## Tech Stack

- [Node.js](https://nodejs.org/)
- [@slack/bolt](https://www.npmjs.com/package/@slack/bolt) — Slack app framework
- [axios](https://www.npmjs.com/package/axios) — HTTP requests to external APIs
- [dotenv](https://www.npmjs.com/package/dotenv) — environment variable management

## Prerequisites

- Node.js installed locally
- A Slack workspace where you can install and configure apps
- A Slack app with:
  - **Socket Mode** enabled
  - An **App-Level Token** (starts with `xapp-`) with the `connections:write` scope
  - A **Bot Token** (starts with `xoxb-`) with permission to respond to slash commands
  - The slash commands above registered under **Slash Commands** in your app configuration

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/suisbetter/Slack-Bot.git
   cd Slack-Bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root with your Slack app credentials:
   ```env
   SLACK_BOT_TOKEN=xoxb-your-bot-token
   SLACK_APP_TOKEN=xapp-your-app-token
   ```

4. Start the bot:
   ```bash
   node index.js
   ```

   You should see `bot is running!` in your terminal once it connects successfully.

## Project Structure

```
Slack-Bot/
├── index.js           # Bot logic and slash command handlers
├── package.json        # Project metadata and dependencies
├── .gitignore           # Excludes node_modules and .env
└── README.md
```

## License

ISC
