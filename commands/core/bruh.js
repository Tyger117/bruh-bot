module.exports = {
    name: 'bruh',
    description: 'sound effect 2',
    category: 'Core',
    aliases: ['rolling-down-in-the-deep'],
    utilisation: '{prefix}bruh',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send('you are not in a voice channel!');
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('You are not in the same voice channel!');

        const track = 'https://www.youtube.com/watch?v=2ZIpFytCSVc';
        if (!track) return console.log("the video does not exist lol");

        client.player.play(message, track, { firstResult: true });
    }
}