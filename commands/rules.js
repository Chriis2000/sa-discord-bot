const { MessageEmbed } = require('discord.js');

const rules = async (guild, member) => {
    const rulesChat = guild.channels.cache.get("922121180096380968");
    
    const rulesTitle = new MessageEmbed()
    .setColor('#ffff7d')
    .setImage('https://i.imgur.com/sc24eZi.png')

    const rules1 = new MessageEmbed()
	.setColor('#ffff7d')
	.setTitle('#1 - Respect all members')
	.setDescription('Please be respectfull to all members of the community. There will be zero tolerance for any toxic behavior.')

    const rules2 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#2 - No NSFW')
	.setDescription('No NSFW content. This includes text, images or any links featuring any NSFW.')

    const rules3 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#3 - Follow the rules of the server')
	.setDescription('Please take the time to read the rules in <#922121180096380968>')

    const rules4 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#4 - DO NOT FALL FOR SCAMS')
	.setDescription('None, I repeat NONE of our staff members will ever privately message you with minting links. All of these links are fake and not to be trusted.')

    const rules5 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#5 - No self promotion')
	.setDescription('We do not have a "shill" channel. No self promotion is allowed within our server.')

    const rules6 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#6 - No spamming')
	.setDescription('Avoid excessive messaging, images, formatting, emoji, commands and @ mentions.')

    const rules7 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#7 - Follow Discords ToS')
	.setDescription('You can find these here: https://discord.com/terms')

    rulesChat.send({ embeds: [rulesTitle, rules1, rules2, rules3, rules4, rules5, rules6, rules7] });
    //member.send({ embeds: [rulesTitle, rules1, rules2, rules3, rules4, rules5, rules6, rules7] });
};

module.exports = { rules };