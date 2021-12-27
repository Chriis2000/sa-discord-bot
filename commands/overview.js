const { MessageEmbed } = require('discord.js');

const overview = async (guild, member) => {
    const overviewChat = guild.channels.cache.get("922121657840197633");

    const overviewTitle = new MessageEmbed()
    .setColor('#f3d04e')
    .setImage('https://i.imgur.com/xxH5OpE.png')

    const overview1 = new MessageEmbed()
	.setColor('#f3d04e')
	.setDescription('Scribble Apes (also knwon as SAPEs) are a unique collection 4,444 automatically generated colourful Ape art. With over 100 hand drawn attributes there will never be two of the same! 🎨')

    const overview2 = new MessageEmbed()
    .setColor('#f3d04e')
	.setDescription('All 4444 Apes all need new homes for the new year. They are not just PNGs but a sign of community and family! Each "SAPE" is unique with some containing rarer attributes than others')

    const overview3 = new MessageEmbed()
    .setColor('#f3d04e')	
	.setDescription('After taking a bath in a secret magical rainbow river deep within the jungles of the metaverse these apes, who were once bland have now turned into a mulitude of colours. 🌈')

    const overview4 = new MessageEmbed()
    .setColor('#f3d04e')
	.setDescription('These Apes are wondering the Ethereum blockchain awaiting for there colours to be released upon the world to spread happiness')

    const overview5 = new MessageEmbed()
    .setColor('#f3d04e')
	.setDescription('Scribble Apes are comprised of a very dedicated, passionate and enthuastic team with an idea and a dream to make not just a community but a family.')

    overviewChat.send({ embeds: [overviewTitle, overview1, overview2, overview3, overview4, overview5] });
};

module.exports = { overview };