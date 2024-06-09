import ytdl from 'ytdl-core'
import fs from 'fs'
import search from 'yt-search'

let sentVideos = [];

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('*مثال* : *.تشغيل edit deadpool*');

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  try {
    let searchResults = await search(text);
    let videoId = searchResults.videos[0].videoId;
    let info = await ytdl.getInfo(videoId);
    let title = info.videoDetails.title.replace(/[^\w\s]/gi, '');

    if (sentVideos.includes(title)) {
      let newVideoId = '';
      for (let i = 0; i < searchResults.videos.length; i++) {
        if (!sentVideos.includes(searchResults.videos[i].title)) {
          newVideoId = searchResults.videos[i].videoId;
          break;
        }
      }
      if (!newVideoId) {
        return m.reply('🐱 لا توجد المزيد من المقاطع بنفس هذا العنوان');
      }
      videoId = newVideoId;
      info = await ytdl.getInfo(videoId);
      title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    }

    let format = ytdl.chooseFormat(info.formats, { quality: 'highestvideo', filter: 'videoandaudio' });
    let video = ytdl(videoId, { format });

    let fileSize = 0;
    video.on('data', (chunk) => {
      fileSize += chunk.length;
      if (fileSize > 50 * 1024 * 1024) {
        video.destroy();
        fs.unlinkSync(`${title}.mp4`);
        m.reply('🐱 حجم الفيديو كبير جدا');
      }
    });

    video.pipe(fs.createWriteStream(`${title}.mp4`)).on('finish', () => {
      let buffer = fs.readFileSync(`${title}.mp4`);
      conn.sendFile(m.chat, buffer, `${title}.mp4`, '', m);
      fs.unlinkSync(`${title}.mp4`);

      sentVideos.push(title);
      if (sentVideos.length > 10) {
        sentVideos.shift();
      }
    });
  } catch (e) {
    console.log(e);
    m.reply(`🐱 خطأ في استيراد الفيديو: ${e.message}`);
  }
};

handler.help = ['playvideo'];
handler.tags = ['التحميلات'];
handler.limit = true;
handler.command = /^تشغيل$/i;

export default handler
