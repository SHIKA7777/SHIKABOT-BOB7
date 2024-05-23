let handler = async (m, { conn }) => {
    const name = conn.getName(m.sender);
    let videoUrl = 'https://telegra.ph/file/2ab6eadb77bc6c9f09692.mp4';
    let tagUser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let more = String.fromCharCode(8206);
    let teks = `${pickRandom([`*╭─⚜️𝐖.𝐒.𝐙🔱𝐁𝐎𝐓⚜️─╮*
*⎊———————————⎊*
‌    *📜قســـم🏦البنـــك📜*
*⎊———————————⎊*
> *『هجو』┇🏦*
> *『لفل』┇🏦*
> *『يومي』┇🏦*
> *『البنك』┇🏦* 
> *『اضف-الماس』┇🏦*
> *『اضف-اكسبي』┇🏦*
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

handler.command = ['ق10','ق10'];

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}
