const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env
dotenv.config();

export default {
    discord_token: process.env.DISCORD_TOKEN
}