import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args }) => {
let wib = moment.tz('Africa/cairo').format('HH:mm:ss')
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  
  let clockString = `تاريخ اليوم🗓 : ${day}/${month}/${year}\n الساعة⌚  : ${wib}`;
  
await conn.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } })
    // Mengirimkan hasil ke grup atau 
  conn.reply(m.chat, clockString, m);
}

handler.help = ['clock'];
handler.tags = ['tools'];
handler.command = /^(الوقت)$/i;

export default handler;
