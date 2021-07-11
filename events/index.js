const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const { Player } = require('discord-player');
const downloader = require('@discord-player/downloader');

client.config = require('./config/bot.js');
client.player = new Player(client, {
    enableLive: true
});
client.player.use('YOUTUBE_DL', downloader);
client.command = new discord.Collection();

conts events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
conts player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split('.')[0], event.bind(null, client));
};

