let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
        throw false
    }

    // بيانات JSON المدمجة مباشرة
    let src = [
        {"question": "https://telegra.ph/file/59ba527ddacb117027167.jpg", "response": "هالاند"},
        {"question": "https://telegra.ph/file/325b1cbeb3b89f100f3ec.jpg", "response": "ابراهيموفيتش"},
        {"question": "https://telegra.ph/file/1b581058e081c7a11f7b2.jpg", "response": "يوهان كرويف"},
        {"question": "https://telegra.ph/file/cfe3405bed769bbdc20b9.jpg", "response": "مالديني"},
        {"question": "https://telegra.ph/file/dd0936ceda70dbc9e0b3d.jpg", "response": "فودين"},
        {"question": "https://telegra.ph/file/9d23b383f3482c49ff0c4.jpg", "response": "بنزيما"},
        {"question": "https://telegra.ph/file/c4b3ac371bf48abbec64d.jpg", "response": "جيرو"},
        {"question": "https://telegra.ph/file/a8dbf9497e8b0ace0a093.jpg", "response": "لوكاكو"},
        {"question": "https://telegra.ph/file/a8dbf9497e8b0ace0a093.jpg", "response": "كورتوا"},
        {"question": "https://telegra.ph/file/3dcd2be1e4a06389952bb.jpg", "response": "ديبروين"},
        {"question": "https://telegra.ph/file/5a2b340e87b52024627a3.jpg", "response": "مارتينيز"},
        {"question": "https://telegra.ph/file/34444279b5717b672e6b8.jpg", "response": "انطوني"},
        {"question": "https://telegra.ph/file/0174744527c961c3aa7cd.jpg", "response": "فينيسيوس"},
        {"question": "https://telegra.ph/file/f8066662efce77654f9b5.jpg", "response": "فاندايك"},
        {"question": "https://telegra.ph/file/fcc3ee3d05ce915d1e8b5.jpg", "response": "رونالدو"},
        {"question": "https://telegra.ph/file/db21f84a023ed7da78881.jpg", "response": "بيلنجهام"},
        {"question": "https://telegra.ph/file/17bd469441b7bfbb1424d.jpg", "response": "مودريتش"},
        {"question": "https://telegra.ph/file/3c234648ff3a825fb6a87.jpg", "response": "غاريث بيل"},
        {"question": "https://telegra.ph/file/a0d06f4963245f1f3d799.jpg", "response": "مولر"},
        {"question": "https://telegra.ph/file/80e18fda175eee6e3f650.jpg", "response": "سون"},
        {"question": "https://telegra.ph/file/6f683715b8d36d9e04210.jpg", "response": "نوير"},
        {"question": "https://telegra.ph/file/5284e4bdc79b567cbdba8.jpg", "response": "كروس"},
        {"question": "https://telegra.ph/file/667cbf90e7270c23f9f89.jpg", "response": "ارنولد"},
        {"question": "https://telegra.ph/file/290d1ed3017a5dc02af5b.jpg", "response": "روديغير"},
        {"question": "https://telegra.ph/file/96908764b1f2169e03fb5.jpg", "response": "غوندوغان"},
        {"question": "https://telegra.ph/file/05a445519fa27833912c6.jpg", "response": "ساكا"},
        {"question": "https://telegra.ph/file/2bd644d81748246add3ec.jpg", "response": "ماغوير"},
        {"question": "https://telegra.ph/file/6f6dfe565bb0a3c55199f.jpg", "response": "بيرناردو سيلفا"},
        {"question": "https://telegra.ph/file/05e6279571ae529dbdf54.jpg", "response": "رافينها"},
        {"question": "https://telegra.ph/file/95558426cbe69dbac1694.jpg", "response": "رافييل"},
        {"question": "https://telegra.ph/file/808ac0056465c7a7f3abd.jpg", "response": "فيلكس"},
        {"question": "https://telegra.ph/file/0fcf12798b510c27e0a5b.jpg", "response": "فيرناندز"},
        {"question": "https://telegra.ph/file/d980b5477af20636d33b8.jpg", "response": "راموس"},
        {"question": "https://telegra.ph/file/baaf604a368459f8c6446.jpg", "response": "مارسيلو"},
        {"question": "https://telegra.ph/file/1b7cd28a1c757ec14e6db.jpg", "response": "كامافينجا"},
        {"question": "https://telegra.ph/file/63fd9bcd5a9dfe10c936b.jpg", "response": "مالديني"},
        {"question": "https://telegra.ph/file/5e3c61b07ff46258cbcb2.jpg", "response": "بيكهام"},
        {"question": "https://telegra.ph/file/18a221bc85221cc53afc2.png", "response": "ماكيما"}
    ];

    // اختيار سؤال عشوائي من بيانات JSON
    let json = src[Math.floor(Math.random() * src.length)];
    let caption = `*${command.toUpperCase()}*
  ❐↞┇الـوقـت⏳↞ *${(timeout / 1000).toFixed(2)}* ثواني ┇
  *استخدم .انسحب للأنسحاب*
  ❐↞┇الـجـائـزة💰↞ ${poin} نقاط ┇
‌⎔ ━ • 𓆩♕𝙎𝙃𝙄𝙆𝘼🐥ᵇᵒᵗ♕𓆪• ━ ⎔
     `.trim();

    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.question, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) {
                conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ ${json.response}*┇`, conn.tebakbendera[id][0]);
                delete conn.tebakbendera[id];
            }
        }, timeout)
    ];
}

// التعامل مع الردود من المستخدمين
handler.before = async (m, { conn }) => {
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys) return !0
    let id = m.chat
    if (!(id in conn.tebakbendera)) return !0
    let json = conn.tebakbendera[id][1]
    if (m.text.toLowerCase() == json.response.toLowerCase()) {
        conn.reply(m.chat, `🎉 مبروك! الإجابة صحيحة! لقد حصلت على ${conn.tebakbendera[id][2]} نقاط.`, m)
        clearTimeout(conn.tebakbendera[id][3])
        delete conn.tebakbendera[id]
    } else {
        conn.reply(m.chat, `❌ الإجابة خاطئة. حاول مرة أخرى!`, m)
    }
    return !1
}

handler.help = ['guessflag']
handler.tags = ['game']
handler.command = /^كوره/i

export default handler
