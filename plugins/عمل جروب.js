//import { bold } from "chalk"
let handler = async (m, { conn, text }) => {
   
   if (!text) return m.reply('_*اكتــب الامـر+اسـم المجمــوعه مثال*_\n*.انشاء-جروب* 𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪')
   try{
    m.reply(wait)
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
 /// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
    m.reply('*مجمــوعتك جاهــزه🦦🤍*' + text + '*_\n\n*الاسم:* ' + text + '\n*ID:* ' + group.gid + '\n*رابطها:* ' + url)
       } catch (e) {
    m.reply(`Error`)
  }
}
handler.help = ['عمل-جروب']
handler.tags = ['owner']
handler.command = /^عمل-جروب$/
handler.owner = true
handler.premium = false
export default handler
