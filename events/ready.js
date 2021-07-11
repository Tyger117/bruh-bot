module.exports = async (client) => {
    console.log('the bot has the discord innit');
    console.log(`ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
    client.user.setActivity('bruh', { type: 'LISTENING' });
}