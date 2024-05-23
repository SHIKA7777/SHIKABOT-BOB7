import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `البحث في التيك توك مثال :\n\n*${usedPrefix + command} المغرب*`;
  const spas = "              ";
  
  try {
    const res = await fetch(`https://api.ikyy.my.id/tiktoksearch?text=${text}`);
    const textResponse = await res.text(); // قراءة الاستجابة كنص
    
    try {
      const data = JSON.parse(textResponse); // محاولة تحليل النص كـ JSON
      const json = data.result[0];

      await conn.sendFile(m.chat, json.play, 'tiktok.mp4', `instagram.com/noureddine_ouafy 


*📛:صاحب الفيديو* ${json.author}
*📍:البلد* ${json.region}
*🕐:مدة الفيديو* ${json.duration}
*🖇️:عنوان الفيديو* ${json.title}

`, m);
      await conn.sendFile(m.chat, json.music, 'error.mp3', null, m, true);
    } catch (parseError) {
      console.error('الاستجابة ليست بتنسيق JSON:', parseError);
      console.error('النص المستلم:', textResponse);
      throw 'الاستجابة من الخادم ليست بتنسيق JSON';
    }
  } catch (fetchError) {
    console.error('حدث خطأ في جلب البيانات:', fetchError);
    throw 'حدث خطأ في جلب البيانات';
  }
};

handler.help = ['tiktoksearch2'];
handler.command = /^(tiktoksearch2)$/i;
handler.tags = ['search'];

export default handler;
