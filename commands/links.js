const { MessageEmbed } = require('discord.js');

const links = async (guild, member) => {
    const linksChat = guild.channels.cache.get("922121768506888192");

    const linksTitle = new MessageEmbed()
    .setColor('#f3d04e')
    .setImage('https://i.imgur.com/7dcGQhf.png')

    const links1 = new MessageEmbed()
	.setColor('#f3d04e')
	.setTitle('Our Website')
	.setDescription('https://scribbleapes.com/')

    const links2 = new MessageEmbed()
    .setColor('#f3d04e')	
	.setTitle('Twitter')
	.setDescription('https://twitter.com/scribbleapes/')

    const links3 = new MessageEmbed()
    .setColor('#f3d04e')
	.setTitle('Instagram')
	.setDescription('https://www.instagram.com/scribbleapes/')

    const links4 = new MessageEmbed()
    .setColor('#f3d04e')
	.setTitle('Opensea')
	.setDescription('https://opensea.io/collection/scribbleapes/')

    const links5 = new MessageEmbed()
    .setColor('#f3d04e')
	.setTitle('Etherscan')
	.setDescription('Coming Soon...')

    const links6 = new MessageEmbed()
    .setColor('#f3d04e')
	.setDescription('Any other links are not to be trusted!')

    linksChat.send({ embeds: [linksTitle, links1, links2, links3, links4, links5, links6] });
};

module.exports = { links };