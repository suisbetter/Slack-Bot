# My First Slack Bot

A Slack bot I made while learning Node.js, and my first Hack Club project. 

## What it does

The bot listens for a few slash commands in any channel where it's been added:

- `/slk-catfact` – replies with a random cat fact
- `/slk-joke` – replies with a joke
- `/slk-ping` or `/slk` – tells you the bot is alive and how fast it answered in ms
- `/slk-help` – lists all of the above 

## Try it

The bot is running 24/7 in the Hack Club workspace. Open the demo channel [#bot-spam](https://hackclub.slack.com/archives/C0P5NE354) and type any of the commands above, for example `/slk-catfact`.

## How to run it yourself

You'll need Node.js and a Slack app with Socket Mode enabled. Grab a Bot token and an App token from the Slack API dashboard, then:

1. `npm install`
2. Copy `.env.example` to `.env` and drop your two tokens in
3. `npm start`

When it connects you'll see `bot is running!` printed in the terminal.
