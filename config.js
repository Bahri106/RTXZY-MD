global.owner = ['6285219968545']  
global.mods = ['6285219968545'] 
global.prems = ['6285219968545']
global.nameowner = 'Rey'
global.numberowner = '6285219968545' 
global.mail = 'support@tioprm.my.id' 
global.gc = 'https://chat.whatsapp.com/HRq0g1GLHtFHtt6EZOmj3A"
global.instagram = 'https://instagram.com/reyy_devz'
global.wm = '© Tio'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'

//INI WAJIB DI ISI!//
global.btc = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.botcahx.live

global.lann = 'YOUR_APIKEY_HERE'
//Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'Your_Key' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
