const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Botunuz olan ${client.user.tag} sunucuya giriş yaptı!`);
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleykümselam Hoş Geldin..');
  }
  if (!msg.content.startsWith(prefix)) {
     return;
}
if (msg.content.toLowerCase() === prefix + 'afk' ) {
  msg.reply('Afk Kaldı')
}
if (msg.content.toLowerCase() === prefix + 'afkçık' ) {
  msg.reply('Artık Afk Değil')
}
});
client.on('guildBanAdd' , (guild, user) => {
  let aramızakatılanlar = guild.channels.find('name', 'aramıza-katılanlar');
  if (!aramızakatılanlar) return;
  aramızakatılanlar.send('https://media.giphy.com/media/8njotXALXXNrW/giphy.gif **Adalet dağıtma zamanı gelmiş!** '+ user.username +'**Bakıyorum da suç işlemiş,Yargı dağıtmaya devam** :fist: :writing_hand:  :spy:' );
});
client.login('NTcxNDMzNjk2NDM2MTU4NDg2.XMRWHQ.K9QTxV8qy3x6AtHhLLi06FR3a1g');
