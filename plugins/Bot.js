const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://i.ibb.co/yWT2rkR/Whats-App-Image-2021-11-14-at-15-00-05.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹TEA BOT _Beta_╹ 

🖲️   *Owner & Founder - Saviru*

🖲️   *Language - NODE JS*

🖲️   *Powered By - TECHVISION LK*

*_This is Beta vesrion. More details Coming soon..._*
`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://i.ibb.co/yWT2rkR/Whats-App-Image-2021-11-14-at-15-00-05.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹TEA BOT _Beta_╹ 

🖲️   *Owner & Founder - Saviru*

🖲️   *Language - NODE JS*

🖲️   *Powered By - TECHVISION LK*

*_This is Beta vesrion. More details Coming soon..._*
`})

    }));
  
  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://i.ibb.co/yWT2rkR/Whats-App-Image-2021-11-14-at-15-00-05.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹TEA BOT _Beta_╹ 

🖲️   *Owner & Founder - Saviru*

🖲️   *Language - NODE JS*

🖲️   *Powered By - TECHVISION LK*

*_This is Beta vesrion. More details Coming soon..._*
`})

    }));
}
