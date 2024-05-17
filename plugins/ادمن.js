let handler = async (m, { conn, participants, groupMetadata, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './admin.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*الرساله:* ${pesan}`
let text = `*╭━━[ *⚜️مشـرفين🔱 @groupname ⚜️*]━━━⬣
┃ *

${oi}

*الادمن:*
${listAdmin}

*[ ⚠ ️] الامـر لاستـدعاء الادمـن في حـال حدوث مشـاكل والحالات الطـارئه فقط!!*`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['ادمن <texto>']
handler.tags = ['group']
handler.command = /^(admins|مشرفين|الادمنز|المشرفين|الادمن)$/i
handler.group = true
export default handler
