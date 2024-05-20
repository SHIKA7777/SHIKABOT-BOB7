import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*ارســل الصــوره التـي تـريد تحـويلهـا لـرابـط*'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`▢ ${media.length} Byte(s) 

▢ ${isTele ? '' : '(Unknown)'} 
▢ *الــرابـط الخــاص بـك:* ${link}\n\n𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪
  `)
}
handler.help = ['tourl']
handler.tags = ['uploader']
handler.command = ['تيليجرام', 'تيلي']
export default handler;
