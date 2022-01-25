const { MessageEmbed } = require('discord.js');

const overview = async (guild, member) => {
    const overviewChat = guild.channels.cache.get("922121657840197633");

    const overviewTitle = new MessageEmbed()
    .setColor('#ffff7d')
    .setImage('https://i.imgur.com/qNGttgs.png')

    const overview1 = new MessageEmbed()
	.setColor('#ffff7d')
	.setDescription('Scribble Apes (SCRAPES) are a unique collection of 4,444 generated colourful Ape art. With over 150 hand drawn attributes there will never be two of the same!  🎨')

    const overview2 = new MessageEmbed()
    .setColor('#ffff7d')
	.setDescription('All 4,444 Apes all need new homes for the new year. They are not just PNGs but a sign of community and family! Each "SCRAPE" is unique with some containing rarer attributes than others.)

    const overview3 = new MessageEmbed()
    .setColor('#ffff7d')	
	.setDescription('With a wide range of unqiue vibrant colours these apes are awaiting to be released from the metaverse and let there colours shine. 🌈')

    const overview4 = new MessageEmbed()
    .setColor('#ffff7d')
	.setDescription('Scribble Apes are comprised of a very dedicated, passionate and enthuastic team with an idea and a dream to make not just a community but a family.')
    

    overviewChat.send({ embeds: [overviewTitle, overview1, overview2, overview3, overview4, overview5] });
};

module.exports = { overview };
