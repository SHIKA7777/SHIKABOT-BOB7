import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender)
  if (!text) {
    throw `أهلاً *${name}*, هل تريد أن تتحدث? Respond with *${usedPrefix + command}* (your message)\n\n📌 Example: *${usedPrefix + command}* اهلا اليكسا`
  }

  m.react('🗣️')

  const msg = encodeURIComponent(text)

  const res = await fetch(`https://ultimetron.guruapi.tech/rekha?prompt=${msg}`)

  const json = await res.json()

  let reply = json.result.response
  m.reply(reply)
}

handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['اليكسا']

export default handler
