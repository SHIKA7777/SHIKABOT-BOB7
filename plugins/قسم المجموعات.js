let handler = async (m, { conn }) => {
    const name = conn.getName(m.sender);
    let videoUrl = 'https://telegra.ph/file/0b5cc682b4d670189016f.mp4';
    let tagUser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let more = String.fromCharCode(8206);
    let teks = `${pickRandom([`*╭─⚜️𝐖.𝐒.𝐙🔱𝐁𝐎𝐓⚜️─╮*
*⎊———————————⎊*
‌    *📜قســـم🔮الجـروب📜*
*⎊———————————⎊*
> *『منشن』┇🔮*
> *『الاشباح』┇🔮* 
> *『مخفي』┇🔮*
> *『ترقيه』┇🔮*
> *『اعفاء』┇🔮*
> *『طرد』┇🔮*
> *『اضافه』┇🔮*
> *『الادمن』┇🔮*
> *『التصنيف』┇🔮* 
> *『جروب قفل』┇🔮*
> *『جروب فتح』┇🔮* 
> *『تغيير الاسم』┇🔮*
*⎊———————————⎊*
*⎊———————————⎊*
*⎔ • توقيـــع الممـــلكه ✒️*
*⎔* • 𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌`])}`.trim();

    conn.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: teks,
        gifPlayback: true,
        gifAttribution: 0
    }, { quoted: m });
};

handler.command = ['ق2','ق2'];

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}
