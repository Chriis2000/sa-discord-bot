const { MessageEmbed } = require('discord.js');

const faq = async (guild, member) => {
    const faqChat = guild.channels.cache.get("922121851923206164");

    const faqTitle = new MessageEmbed()
    .setColor('#ffff7d')
    .setImage('https://i.imgur.com/cKLybte.png');

    const faq1 = new MessageEmbed()
	.setColor('#ffff7d')
	.setTitle('How can I buy a Scribble Ape NFT?')
	.setDescription('New to NFTs? No problem! We will explain fully below on how to purchase an Scribble Ape! \u200B \u200B')
    .addFields(
		{
            name: 'How to Mint:',
            value: '\n **1** - Download the metamask.io extension on your browser \n **2** - Purchase Ethereum from various exchanges, such as Coinbase or Binance \n **3** - Send Ethereum from this exchange to your MetaMask wallet \n **4** - When it is time to mint, open the Scribble Apes website and select the number of NFTs you wish to purchase (Maximum of 5 per transaction) \n **5** - Click "Join The Club" button, Metamask will popup asking for connection \n **6** - Confirm the transaction and any associated fees \n **7** - Once you have made your purchase, your NFTs will appear in account on Opensea'
        }
    );

    const faq2 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('What is the total supply of Scribble Apes?')
	.setDescription('There will be a total of 4,444 uniquely generated Scribble Apes.')

    const faq3 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('Is there a launch date?')
	.setDescription('As of yet there is not a launch date. We will be looking at growing our community first. However a launch date will be availabe soon!')

    const faq4 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('What is the cost to mint an Scribble Ape?')
	.setDescription('It will cost 0.06 ETH to mint an ape + gas fees.')

    const faq5 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('Is there a pre-sale?')
	.setDescription('Yes! There will be a pre-sale. The first 444 people to join and apply for the OG Ape role will automatically also get the whitelist role. Thereafter there will be multiple giveaways in order to receive a whitelist role to gain access to the pre sale.')

    const faq6 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('Anymore questions?')
	.setDescription('Feel free to ask in <#922178442009669653>')

    faqChat.send({ embeds: [faqTitle, faq1, faq2, faq3, faq4, faq5, faq6] });
    //member.send({ embeds: [faqTitle, faq1, faq2, faq3, faq4, faq5, faq6] });
};

module.exports = { faq };