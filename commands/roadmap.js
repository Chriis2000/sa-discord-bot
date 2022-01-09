const { MessageEmbed } = require('discord.js');

const roadmap = async (guild, member) => {
    const roadmapChat = guild.channels.cache.get("922121717244125244");

    const roadmapTitle = new MessageEmbed()
    .setColor('#ffff7d')
    .setImage('https://i.imgur.com/50OR6t2.png');

    const roadmap0 = new MessageEmbed()
	.setColor('#ffff7d')
	.setTitle('#1 - 0%')
	.setDescription('We organise Collaborations with other NFT Projects.')

    const roadmap1 = new MessageEmbed()
	.setColor('#ffff7d')
	.setTitle('#2 - 20%')
	.setDescription('We give back to the dedicated team of Scribble Apes! (Including the Artists, Devs, Community Helpers and many more!')

    const roadmap2 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#3 - 40%')
	.setDescription('To show our gratitude to the community who made this project happen (You!) we will purchase an NFT worth $25,000 and provide a giveaway to anyone who has purchased a #SCRAPE. (The choice of NFT will be decided by the Members of the Scribble Ape Discord via a Poll/Suggestions)')

    const roadmap3 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#4 - 60%')
	.setDescription('We will donate $20,000 to Save the Chimps. Save the Chimps is a large sanctuary for Chimpanzees there works ensures these endangered animals are provided a safe haven (and who doesnt like chimps...) Together lets give something back!')

    const roadmap4 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#5 - 80%')
	.setDescription('The Exclusive Scribble Apes Merch Store gets unlocked, featuring Limited Edition T-Shirts, Hoodies, and other Items.')

    const roadmap5 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#6 - 100%')
	.setDescription('Mutant Scribble Apes Serum is released upon the MetaVerse... What wonders await?')

    const roadmap6 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('Got some ideas?')
	.setDescription('Any suggestions please let us know within the <#924079465129185300>')

    roadmapChat.send({ embeds: [roadmapTitle, roadmap0, roadmap1, roadmap2, roadmap3, roadmap4, roadmap5, roadmap6] });
};

module.exports = { roadmap };