const { MessageEmbed } = require('discord.js');

const roadmap = async (guild, member) => {
    const roadmapChat = guild.channels.cache.get("922121717244125244");

    const roadmapTitle = new MessageEmbed()
    .setColor('#ffff7d')
    .setImage('https://i.imgur.com/50OR6t2.png');

    const roadmap0 = new MessageEmbed()
	.setColor('#ffff7d')
	.setTitle('#1 - 0%')
	.setDescription('We organise Collaborations with other NFT Projects, including Cat Bricks Clubhouse, Sneaky Vampire Syndicate and more!')

    const roadmap1 = new MessageEmbed()
	.setColor('#ffff7d')
	.setTitle('#2 - 20%')
	.setDescription('The dedicated team of Scribble Apes will be compensated for all there dedicated work!')

    const roadmap2 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#3 - 40%')
	.setDescription('To show our gratitude to the community who made the project happen (You!) we will be purchasing a NFT worth $25,000 and provide a giveaway to any Holders of a #SCRAPE. (The choice of NFT will be decided by the Members of the Scribble Ape Discord via a Poll/Suggestions)')

    const roadmap3 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#4 - 60%')
	.setDescription('We will be donating $20,000 to a currently undecided charity. We want our charity to reflect the beliefes of the community. Check #poll to cast your vote!')

    const roadmap4 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#5 - 80%')
	.setDescription('Scribble Apes Exclusive Merch Store is unlocked!, featuring T-Shirts, Hoodies, Bags, Drinkware, Phone cases and much more! (Limited/Exclusive Merch for <@930856092399960124>)')

    const roadmap5 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('#6 - 100%')
	.setDescription('P2E Scribble Apes Mobile App. Our end goal is to create a mobile game which allows the user to play as their ape to gain irl rewards by completing missions, farming ect (More info on that at a later date)')

    const roadmap6 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('After Mint...')
	.setDescription('Mutant Scribble Apes Serum is released upon the MetaVerse... What wonders await?')

    const roadmap7 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('Holder Benefits!')
	.setDescription('  1. Giveaways (NFTs worth up to the value of $5,000) Lower value, more winners.\n2. OG Apes will gain access to Limited Edition Merch, Private Giveaways & Parties! (More benefits soon following...)\n3. Profits from royalties will be entered into a community wallet.\n4. SCRAPES Coin will be activated-This will conincide with our Scribble Apes Mobile App. (Holders gaining access to the App)\n5. In Real Life & Online parties, these will be coordinated within different countires by different members of the staff team. Each party will be given a set amount of Money from the Scribble Apes Team to ensure all food/drinks are paid for! Lets have fun! (Please drink responsibly)\n6. When the Mutant Scribble Apes are revealed any Holder of a SCRAPE will gain a 50% chance at recieving a free air dropped serum.')


    roadmapChat.send({ embeds: [roadmapTitle, roadmap0, roadmap1, roadmap2, roadmap3, roadmap4, roadmap5, roadmap6, roadmap7] });
};

module.exports = { roadmap };
