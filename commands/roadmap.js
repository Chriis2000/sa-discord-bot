const { MessageEmbed } = require('discord.js');

const roadmap = async (guild, member) => {
    const roadmapChat = guild.channels.cache.get("922121717244125244");

    const roadmapTitle = new MessageEmbed()
    .setColor('#f3d04e')
    .setImage('https://i.imgur.com/PRvgFMF.png');

    const roadmap1 = new MessageEmbed()
	.setColor('#f3d04e')
	.setTitle('#1 - 20%')
	.setDescription('We pay back the dedicated team of Scribble Apes! (Including the artists, devs, staff members and many more!')

    const roadmap2 = new MessageEmbed()
    .setColor('#f3d04e')
	.setTitle('#2 - 40%')
	.setDescription('To show our gratitude to the people who made this project happen (You!) we will purchase an NFT worth $15,000 and provide a giveaway to anyone who has purchased a SAPE. (Which nft we will be giving away will also be decided through a poll in our discord server)')

    const roadmap3 = new MessageEmbed()
    .setColor('#f3d04e')
	.setTitle('#3 - 60%')
	.setDescription('We will donate $20,000 to Save the Chimps. Save the Chimps is a large sanctuary for Chimpanzees whos mission is to provide a refuge for these Endangered Animals. Totgether lets give something back!')

    const roadmap4 = new MessageEmbed()
    .setColor('#f3d04e')
	.setTitle('#4 - 80%')
	.setDescription('10 ETH will be added to the Community Walet (Whos etherscan address will be available to view in the future) This Community Wallet will be used to purchase and hold NFTs with the profits being split between the owners of SAPEs')

    const roadmap5 = new MessageEmbed()
    .setColor('#f3d04e')
	.setTitle('#5 - 100%')
	.setDescription('We will release exclusive SAPE merch available to any holders, this does not only limited to clothing! 👀')

    const roadmap6 = new MessageEmbed()
    .setColor('#f3d04e')
	.setTitle('Got some ideas?')
	.setDescription('Any suggestions please let us know within the <#924079465129185300>')

    roadmapChat.send({ embeds: [roadmapTitle, roadmap1, roadmap2, roadmap3, roadmap4, roadmap5, roadmap6] });
};

module.exports = { roadmap };