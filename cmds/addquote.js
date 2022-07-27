const Keyv = require('keyv');
const quoteslist  = new Keyv(MYSQL); 
keyv.on('error', err => console.error('Keyv connection error:', err));

module.exports = {
    name: "addquote",
    description: "adding quote",
    async execute (message){
        const user = message.author.id;
        
        /*
        var stats = {}
        if(fs.existsSync('./assets/quotelib.json')){
            stats = jsonfile.readFileSync('./assets/quotelib.json');
        }
        if(user in stats === true){
            message.channel.send("You already have quote. Use `!changequote` to change it");
            return;
        }
        stats[user] = {};
        const filter = m => m.author.id === message.author.id; ///make sure same user who entered command
    
        message.channel.send("Enter your quote. If you don't want to, enter `exit`");
        const collected = await message.channel.awaitMessages({ filter: filter, max: 1 });
        if(collected.first().content.toLowerCase()==="exit"){
            message.channel.send("Exiting. Goodbye!");
            return;
        }
        collected.first().react("✅");
        let quote = collected.first().content;
        let name = message.guild.members.cache.get(user).displayName;
        
        message.channel.send("Setting `" + name + "`'s quote as:\n> " + quote);
        stats[user] = quote;
        jsonfile.writeFileSync('./assets/quotelib.json', stats);
        */
    }
}