const { MessageEmbed } = require('discord.js');

const setup = async (guild, member) => {
    const setupChat = guild.channels.cache.get("921805532040425523");

    const setupVerify = new MessageEmbed()
	.setColor('#f3d04e')
	.setTitle('Welcome to Scribble Apes!')
	.setDescription('Please react by clicking on the 🍌 to gain access to the server.\n \n Make sure to read our <#922121180096380968> and <#922121657840197633>')
	.setThumbnail('https://i.imgur.com/fWMV4LV.jpg')

	//member.send({ embeds: [setupVerify] });
    setupChat.send({ embeds: [setupVerify] });
};

module.exports = { setup };