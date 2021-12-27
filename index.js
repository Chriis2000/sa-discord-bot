require('dotenv').config();
const { Client, Intents } = require('discord.js');
const { verify } = require('./commands/verify');
const { welcome } = require('./commands/welcome');
const { faq } = require('./commands/faq');
const { rules } = require('./commands/rules');
const { roadmap } = require('./commands/roadmap');
const { links } = require('./commands/links');
const { overview } = require('./commands/overview');
const { setup } = require('./commands/setup');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', async (member) => {
  welcome(member);
});

client.on('messageCreate', async (message) => {
  if (message.author.id !== '304249277096525824') return;

  switch(message.content) {
    case "!faq":
      faq(message.guild, message.author);
      message.delete();
      break;
    case "!rules":
      rules(message.guild, message.author);
      message.delete();
      break;
    case "!roadmap":
      roadmap(message.guild, message.author);
      message.delete();
      break;
    case "!links":
      links(message.guild, message.author);
      message.delete();
      break;
    case "!overview":
      overview(message.guild, message.author);
      message.delete();
      break;
    case "!setup":
      setup(message.guild, message.author);
      message.delete();
      break;
    default:
      return;
      break;
  };
});

client.on('messageReactionAdd', async (reaction, user) => {
  verify(reaction, user, true);
});

client.on('messageReactionRemove', async (reaction, user) => {
  verify(reaction, user, false);
});

client.login(process.env.TOKEN);