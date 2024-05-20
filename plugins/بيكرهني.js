let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`▣──────────────────
│‌‌        *بيكـرهني⚔️*
*حبيـبك اهـو 😂💔*
▣─❧ ${toM(a)} 
> 𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪
▣──────────────────`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['بيكرهني']
handler.group = true
export default handler
