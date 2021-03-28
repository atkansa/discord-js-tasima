
 
   
    if (!message.member.hasPermission('MOVE_MEMBERS')) return message.channel.send('`Bu Kodu Kullanmaya iznin Yok`');
    const üye = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!üye) return message.channel.send('`Geçerli bir üye belirtmediniz.`')
    if (!üye.voice.channel) return message.channel.send('`Bahsettiğiniz kişi sesli kanalda değil.`');
      if(!args[1]) {
        if(message.member.voice.channel) return message.channel.send('`Sen seste değilsin!`');
        message.channel.send('`Başarıyla kanala taşındı`');
        üye.voice.setChannel(message.member.voice.channelID) 
      } else {
        if(!üye.voice.channel) return message.channel.send('`Belirtilen üye seste değil`');
        message.channel.send('`Başarıyla kanala taşındı`');
        üye.voice.setChannel(args[1])
      }
        
 
