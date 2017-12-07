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

botBaifern.on('message', message => {
  if (message.content === 'สุ่มกาชา!!') {
    message.channel.sendMessage('ผลลัพธ์ที่ได้คือเกลือจ้า!!');
  }
});

botBaifern.login(process.env.BOT_TOKEN);
