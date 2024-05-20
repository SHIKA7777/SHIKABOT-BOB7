let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
        throw false
    }
    let src = [
    {
        "question": "https://telegra.ph/file/f4763f6e972b42016dbed.jpg",
        "response": "العراق"
    },
    {
        "question": "https://telegra.ph/file/f4763f6e972b42016dbed.jpg",
        "response": "تونس"
    },
    {
        "question": "https://telegra.ph/file/bff3a87cc3c91001bf4d6.jpg",
        "response": "الكويت"
    },
    {
        "question": "https://telegra.ph/file/2808effc2a27c12cba22a.jpg",
        "response": "هولاندا"
    },
    {
        "question": "https://telegra.ph/file/55f9704ae3832a3f2b623.jpg",
        "response": "السعوديه"
    },
    {
        "question": "https://telegra.ph/file/8395f68db400646e57b6d.jpg",
        "response": "تايلاند"
    },
    {
        "question": "https://telegra.ph/file/12c2d1581c69bb64d0083.jpg",
        "response": "انجولا"
    },
    {
        "question": "https://telegra.ph/file/4772f51b68439b442f2f1.jpg",
        "response": "السنغال"
    },
    {
        "question": "https://telegra.ph/file/f87cb5ffb9fd99e3d33c5.jpg",
        "response": "أوكرانيا"
    },
    {
        "question": "https://telegra.ph/file/83efe832a2b76b060987f.jpg",
        "response": "سوريا"
    },
    {
        "question": "https://telegra.ph/file/f0befef4438af16945930.jpg",
        "response": "كندا"
    },
    {
        "question": "https://telegra.ph/file/7289d453b6cc273234ee8.jpg",
        "response": "المكسيك"
    },
    {
        "question": "https://telegra.ph/file/5b0f02d536cbd812a9379.jpg",
        "response": "فيتنام"
    },
    {
        "question": "https://telegra.ph/file/e6fa7c7ae59e02b560236.jpg",
        "response": "ليبيا"
    },
    {
        "question": "https://telegra.ph/file/a8b735506b5a5d91651e5.jpg",
        "response": "قطر"
    },
    {
        "question": "https://telegra.ph/file/a8b735506b5a5d91651e5.jpg",
        "response": "تركيا"
    },
    {
        "question": "https://telegra.ph/file/51225cbfd30c30d67170f.jpg",
        "response": "جنوب افريقيا"
    },
    {
        "question": "https://telegra.ph/file/4c078a75311f0b1aef69c.jpg",
        "response": "كوريا الجنوبيه"
    },
    {
        "question": "https://telegra.ph/file/91ef4837e089ba3ec34a5.jpg",
        "response": "الارجنتين"
    },
    {
        "question": "https://telegra.ph/file/6eb8ba8ac047b0353d42c.jpg",
        "response": "اليابان"
    },
    {
        "question": "https://telegra.ph/file/bf71566aa8a6afe70a6a2.jpg",
        "response": "كوريا الشماليه"
    },
    {
        "question": "https://telegra.ph/file/5a7ebfa3feb233b247c06.jpg",
        "response": "البرازيل"
    },
    {
        "question": "https://telegra.ph/file/249e039cde2f24ce1c417.jpg",
        "response": "اسكتلندا"
    },
    {
        "question": "https://telegra.ph/file/e95719a4c7481f8459ef0.jpg",
        "response": "امريكا"
    },
    {
        "question": "https://telegra.ph/file/547ec919ebfb29e7769f6.jpg",
        "response": "ايطاليا"
    },
    {
        "question": "https://telegra.ph/file/6a1326c71f592695964bc.jpg",
        "response": "بنغلاديش"
    },
    {
        "question": "https://telegra.ph/file/20fd3a09830eed9e3405c.jpg",
        "response": "البرتغال"
    },
    {
        "question": "https://telegra.ph/file/2fa4fa715156cb130114d.jpg",
        "response": "انجلترا"
    },
    {
        "question": "https://telegra.ph/file/1d4960111538eaa44cd2f.jpg",
        "response": "اسبانيا"
    },
    {
        "question": "https://telegra.ph/file/d682fa7ae70a552096e25.jpg",
        "response": "الجزائر"
    },
    {
        "question": "https://telegra.ph/file/8ca48df2a102431bcc596.jpg",
        "response": "المانيا"
    },
    {
        "question": "https://telegra.ph/file/ccdb3f88beb31253ca8a2.jpg",
        "response": "المغرب"
    },
    {
        "question": "https://telegra.ph/file/416b5943a2312137a54bd.jpg",
        "response": "فرنسا"
    },
    {
        "question": "https://telegra.ph/file/b3e67fd385b09c126bd36.jpg",
        "response": "مصر"
    },
    {
        "question": "https://telegra.ph/file/6ca9208fdd9293187a0da.jpg",
        "response": "الصين"
    },
    {
        "question": "https://telegra.ph/file/2d3df456fa23b07a3f4e3.jpg",
        "response": "السويد"
    },
    {
        "question": "https://telegra.ph/file/515a8d5d25d2e950cd081.jpg",
        "response": "ويلز"
    },
    {
        "question": "https://telegra.ph/file/98cfd2f983a45dab2d0d4.jpg",
        "response": "تشيلي"
    }
]
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*
* ❐↞┇الـوقـت⏳↞ ${(timeout / 1000).toFixed(2)} ┇*
  *استخدم .انسحب للأنسحاب*
  ❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇
𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ ${json.name}*┇`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['guessflag']
handler.tags = ['game']
handler.command = /^علم/i

export default handler
