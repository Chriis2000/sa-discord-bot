const verify = async (reaction, user, a) => {
  const verifiedRole = reaction.message.guild.roles.cache.get('921878464276070450');
  const member = reaction.message.guild.members.cache.get(user.id);

  if (reaction.partial) {
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message:', error);
			return;
		}
	};

  if (reaction.message.id !== '924418250727641099') return;
  if (reaction._emoji.name !== "🍌") return;

  if (a === false) {
    if (member.roles.cache.some(role => role.id === '921878464276070450')) {
      member.roles.remove('921878464276070450');
    };
    return console.log(`Unverified: ${user.username}#${user.discriminator}`);
  };

  member.roles.add(verifiedRole);
  
  return console.log(`Verified: ${user.username}#${user.discriminator}`);
};

module.exports = { verify };