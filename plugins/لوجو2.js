import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'مثال :\n*.lg4* bobiza'
  m.reply('فاصبــر صبـرا جميــلا🤍')
  let res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${response[0]}`
  conn.sendFile(m.chat, res, 'bobiza.jpg', `instagram.com/noureddine_ouafy`, m, false)
}
handler.help = ['flaming4'].map(v => v + ' <text>')
handler.tags = ['maker','logo']
handler.command = /^(لوجو2)$/i

export default handler
