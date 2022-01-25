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
	.setDescription('Scribble Apes will have a total of 4,444 uniquely generated pieces of art.')

    const faq3 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('What are the Dates?')
	.setDescription('Pre-Sale: 11th of February at 6pm EST\nPublic Sale: 12th of February, 7pm EST.')

    const faq4 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('How much will it cost to mint a Scribble Ape?')
	.setDescription('0.06 ETH + gas fees.')

    const faq5 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('How many WLs will there be?')
	.setDescription('The WL for Scribble Apes will be split into two catagories.\nOG Apes: OG Ape will contain a WL + added benefits following our mint date. Check <@922121717244125244> & <@930557452280283136> for more details.\nWL Ape: Will gain access to the Pre-Sale only.')

    const faq6 = new MessageEmbed()
    .setColor('#ffff7d')
	.setTitle('How will Scribble Apes reveal?')
	.setDescription('We will reveal the Apes 72 hours after the Public Sale date.')

    faqChat.send({ embeds: [faqTitle, faq1, faq2, faq3, faq4, faq5, faq6] });
    //member.send({ embeds: [faqTitle, faq1, faq2, faq3, faq4, faq5, faq6] });
};

module.exports = { faq };
