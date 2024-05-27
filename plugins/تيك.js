import { tiktokdl } from '@bochilteam/scraper';
import fg from 'api-dylux';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

 if (!args[0] && m.quoted && m.quoted.text) {
  args[0] = m.quoted.text;
}
if (!args[0] && !m.quoted) throw `اعطني الرابط \n\nمثال: https://vm.tiktok.com/ZMMPhv9Fb/`;
 if (!args[0].match(/tiktok/gi)) throw `تأكد من ان الرابط رابط تيك توك`;


  let txt = '*استغفــرالله🤍*';

  try {
    const { author: { nickname }, video, description } = await tiktokdl(args[0]);
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;

    if (!url) throw global.error;

    conn.sendFile(m.chat, url, 'tiktok.mp4', '', m);
