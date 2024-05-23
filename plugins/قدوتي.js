let handler = async(m, {
	conn,
	text,
	command
}) => {
	let yh = global.wp
	let url = yh[Math.floor(Math.random() * yh.length)]
	conn.sendMessage(m.chat, {
		image: {
			url: url
		},
		caption: "*راجـل ابقـا زيـو 🦦* \n> *‌𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪*"
	}, {
		quoted: m
	});
}
handler.command = /^(قدوتي)$/i
handler.tags = ['FOOTBAll']
handler.help = ['قدوتي']
export default handler

global.wp = [
  'https://telegra.ph/file/2e325eb76f7629766a1af.jpg',
  'https://telegra.ph/file/22ce032b078f694f00cf1.jpg',
  'https://telegra.ph/file/cee90281290648dd0c60d.jpg',
'https://telegra.ph/file/86bc4d60da3fd1b3292c1.jpg',
  'https://telegra.ph/file/5b1c41fa76a879e8f123c.jpg',
  'https://telegra.ph/file/2fe8f13620bb7626fc38b.jpg',
  'https://telegra.ph/file/d11b14d5d29ffb954273a.jpg',
  'https://telegra.ph/file/b69882d338ed6815daee3.jpg',
  'https://telegra.ph/file/6d21674f994748e8565e9.jpg',
  'https://telegra.ph/file/4cb6a8ca0358980b37e9c.jpg',
  'https://telegra.ph/file/82ae9068cafa6f647e8b5.jpg',
  'https://telegra.ph/file/a234fe0cc11be4ca7981d.jpg'
  
]
