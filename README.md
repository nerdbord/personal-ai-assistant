# Personal AI Assistant

This project is about building a personal AI assistant using the OpenAI API. The assistant will integrate functionalities like ChatGPT for conversation, DALL·E for image generation, and Whisper for voice recognition. It will also connect to the internet for real-time information retrieval.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd personal-ai-assistant
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenAI API key and Telegram bot token:
   ```
   OPENAI_API_KEY=your_openai_api_key
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   ```

5. Start the bot:
   ```bash
   npm start
   ```

## Usage

- Interact with the bot on Telegram to test its functionalities.
- The bot can generate text responses, create images, recognize voice messages, and fetch real-time information.
