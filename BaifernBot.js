const Discord = require('discord.js');
const botBaifern = new Discord.Client();

botBaifern.on('ready', () => {
  console.log('Baifern ready!');
});

//Set listener on 'message'
botBaifern.on('message', message => {
  if (message.content === 'สวัสดี!!') {
    message.channel.sendMessage('ดีจ้า!!');
  }
});

botBaifern.login(process.env.BOT_TOKEN);
