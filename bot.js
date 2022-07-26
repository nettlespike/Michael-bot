//const { token } = require("./config.json");
// creating client object

const token = "ODg5OTc3MzQ2NTgzNTYwMzAz.YUpF_g.HNn3sjU0kZdTX4_2TBaMh6al0aI";
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

const fs = require("fs"); // to go into different files

const PREFIX = "!";

// yoinking from commands
client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./cmds/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./cmds/${file}`);
  client.commands.set(command.name, command);
}

// yoinking from listeners
client.listener = new Collection();
const listenerFiles = fs
  .readdirSync("./listeners/")
  .filter((file) => file.endsWith(".js"));
for (const file of listenerFiles) {
  const listeners = require(`./listeners/${file}`);
  client.listener.set(listeners.name, listeners);
}

// bootleg as hell solution
const listenFiles = [];
fs.readdirSync("listeners").forEach((file) => {
  const newFile = file.slice(0, file.length - 3);
  listenFiles.push(newFile);
});

// code will run when the client is ready
client.once("ready", () => {
  console.log("Ready!");
  client.user.setActivity("That's what she said. !help");
});


// login to discord
client.login(token);

//send message when user joins
client.on('guildMemberAdd', member => {
  member.guild.channels.get("888605327740784683").send("Welcome"); 
});

// logs every message sent to the server
client.on("messageCreate", (message) => {
  /**
   * Controllable/functions with a prefix
   */
  // splitting up the message by prefix, command, and arguments
  if (message.content.startsWith(PREFIX)) {
    // parsing commands
    const [cmd, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      // regex to eliminate extra spaces -> use commas if they're there?
      .split(/\s+/);
    // testing: logging args to console
    console.log("author: " + message.author);
    console.log(args);

    //keep server running
    if (message.content === 'ping') {
        message.reply('pong!');
    }

    // commands
    if (!client.commands.has(cmd)) return;
    // executing commands dynamically
    try {
      client.commands.get(cmd).execute(message, args, client);
    } catch (error) {
      console.error(error);
      message.reply({ content: "The command doesn't work :(", ephemeral: true });
    }
  }

  
  // caveman iq solution
  else if (true) {
    for (let i = 0; i < listenFiles.length; i++) {
      if (message.author.bot) return;
      client.listener.get(listenFiles[i]).execute(message, client);
    }
  }
  
});

