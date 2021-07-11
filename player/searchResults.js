module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: client.config.embed.colour,
            author: { name: `Here are your search results for ${query}` },
            footer: { text: 'Send the number of the result you want in chat.' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};