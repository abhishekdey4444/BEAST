const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzEyOTE2MTE2OTk2ODgyNDgz.XuCq1w.mpbgqLkRc5KGhAD51m3tK-mTUb8';
const PREFIX = '!';
const version = '1.0.1';
bot.on('ready', () => {
    console.log('BEAST IS ONLINE !')
});






bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        /*--------------------------------------------------DELETE MESSAGES--------------------------------------------- */
        case 'delete':
            if (!message.member.roles.cache.find(r => r.name === "ADMIN" || "MODS" || "BEAST")) return message.reply("BEAST Status: n0t AutH0RiZed");
            if (!args[1]) return message.reply('input no of messages you want to delete')
            message.channel.bulkDelete(args[1]);
            break;

        /*--------------------------------------------------DELETE MESSAGES ENDED--------------------------------------------- */



        case 'help': message.reply('I am here to help you.\n Nobody messes with my pals'); break;


        /*--------------------------------------------------EMBED PROFILE--------------------------------------------- */

        case 'profile':
            const profile = new Discord.MessageEmbed()
                .setTitle('User Information')
                .addField('Player Name', message.author.username)
                .addField('Version', version)
                .addField('current Server', message.guild.name)
                .setColor(0xF1C40F)
                .setThumbnail(message.author.avatarURL);
            message.reply(profile);
            break;

        /*--------------------------------------------------EMBED PROFILE ENDED------------------------------------- */



        /*---------------------------------------KICK A  PERSON----------------------------------------------- */
        case 'kick': if (!message.member.roles.cache.find(r => r.name === "ADMIN" || "MODS" || "BEAST")) return message.reply("BEAST Status: n0t AutH0RiZed");
            if (!args[1]) message.channel.send('you need to specify a person!')

            const userk = message.mentions.users.first();
            if (userk) {
                const member = message.guild.member(userk);

                if (member) {
                    member.kick('You have been KICKED for being an asshole.').then(() => {
                        message.reply(" Sucessfully KICKED");
                    }).catch(err => {
                        message.reply('Unable to KICK the member');
                        console.log(err);
                    });
                }
                else {
                    message.reply("That user isn\'t in this server")
                }
            } else {
                message.reply("You need to specify a person")
            }
            break;


        /*------------------------------------------------KICK A PERSON ENDED--------------------------------------- */



        /*--------------------------------------------------BAN A PERSON--------------------------------------------- */
        case 'ban': if (!message.member.roles.cache.find(r => r.name === "ADMIN" || "MODS" || "BEAST")) return message.reply("BEAST Status: n0t AutH0RiZed");
            if (!args[1]) message.channel.send('you need to specify a person!')

            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.ban('You have been BANNED for being an asshole.').then(() => {
                        message.reply(" Sucessfully BANNED !!");
                    }).catch(err => {
                        message.reply('Unable to BAN the member');
                        console.log(err);
                    });
                }
                else {
                    message.reply("That user isn\'t in this server")
                }
            } else {
                message.reply("You need to specify a person")
            }
            break;
        /*--------------------------------------------------BAN A PERSON ENDED-------------------------------------------------- */




    }
});

/*--------------------------------------------------JOINING SEVER--------------------------------------------- */
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "⫸⫸joined-left");
    if (!channel) return;

    channel.send(`Welcome to my sever, ${member} Please read the rules in the rules channel. Profile below:- `);
    const profile = new Discord.MessageEmbed()
        .setTitle('User Information')
        .addField('Player Name', message.author.username)
        .addField('Version', version)
        .addField('current Server', message.guild.name)
        .setColor(0xF1C40F)
        .setThumbnail(message.author.avatarURL);
    message.reply(profile);
});

/*--------------------------------------------------JOINING SERVER ENDED--------------------------------------------- */




bot.login(token);

/*------------------------------------------------------------BAKWASS -----------------------------------------------------------------------*/
/*bot.on('message', msg=>{
    let args =msg.content.substring(PREFIX.length).split(" ");

if(args[0]=== 'Madharchod' || args[0] === 'madharchod' )
{
    msg.reply('kya be randi.... kaisa hai?');
}
else if(msg.content==='ankit'|| msg.content==='Ankit'){
    msg.reply('ha pata hai.... bahut bada noob hai')
}
else if(msg.content==='mrinal'|| msg.content==='Mrinal') {
    msg.reply('ha pata hai.... bahut bada noob hai')
}

else if( msg.content==='Mrinal ko janta h' || msg.content==='mrinal ko janta h'){
    msg.reply('hn jante h, saala din bhar lag lag kr k roote rehta h')
}
switch(msg.content){
case 'madharchod':;
case 'Madharchod':msg.reply('tera baap ' + msg.content);break;
case 'randi':;
case 'Randi':msg.reply('tera baap ' + msg.content);break;
case 'randi ka bacha':;
case 'Randi ka bacha':msg.reply('tera baap ' + msg.content);break;
case 'behenchod':;
case 'Behenchod':msg.reply('tera baap ' + msg.content);break;
case 'chachi':;
case 'Chachi':msg.reply('tera baap ' + msg.content);break;
case 'bhosidiwala':;
case 'Bhosidiwala':msg.reply('tera baap ' + msg.content);break;
case 'bahanchod':;
case 'Bahanchod':msg.reply('tera baap ' + msg.content);break;

}*/