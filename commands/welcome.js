const { MessageEmbed } = require('discord.js');

const welcome = async (member) => {
    const welcomeChat = member.guild.channels.cache.get("922122177040482344");

    const welcomeEmbed = new MessageEmbed()
	.setColor('#ffff7d')
	.setTitle(`${member.user.username}#${member.user.discriminator} just joined the server!`)
	.setDescription(`<@${member.user.id}> Welcome to the **Scribble Apes** community!`)
	.setImage('https://i.imgur.com/ihUxHfh.png')
	.setTimestamp()
	.setFooter('Scribble Apes', 'https://i.imgur.com/fWMV4LV.jpg');

    welcomeChat.send({ embeds: [welcomeEmbed] });

    return console.log(`Joined: ${member.user.username}#${member.user.discriminator}`);
};

module.exports = { welcome };