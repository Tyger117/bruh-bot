const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const { Player } = require('discord-player');
const downloader = require('@discord-player/downloader').Downloader;

client.config = require('./config/bot.js');
client.player = new Player(client, {
    enableLive: true 
});
client.player.use('YOUTUBE_DL', downloader);
client.commands = new discord.Collection();

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split('.')[0], event.bind(null, client));
};

fs.readdirSync('./commands').forEach(cat => {
    const commands = fs.readdirSync(`./commands/${cat}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${cat}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split('.')[0], event.bind(null, client));
};

client.login(client.config.discord.token);