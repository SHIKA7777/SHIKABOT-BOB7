let handler = async (m, { conn }) => {

 await conn.sendMessage(m.chat, { react: { text: '🔮', key: m.key } }) 
m.reply(`‌‌ *⎔━•* 𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪 
‌              *『YOU🔆TUBE』*
⎔── ━ • 
*| اهـــلا يـاحــب فـي ستـورم بـوت🦦*
*| اكتــب يوتسيرش+اســم الفيــديو🐔*
*| _مثــال_*
*|.يوتسيرش ناروتو*
*| خــد رابــط الفيــديو الـي انــت عايـزو واستخــدم الامــر video وحـط الرابــط*
*| _مثــال_*
*.video + الرابــط الي اخـدتو من البحـث*
*استمتـــع ياحــب*
*⎔━•* 𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪 *•━ ⎔*`) 
}
handler.help = ['يوتيوب']
handler.tags = ['infobot']
handler.command = /^(يوتيوب)$/i

export default handler;
