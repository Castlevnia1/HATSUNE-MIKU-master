
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `╭━〘𝐆𝐀𝐙𝐀-𝐁𝐎𝐓〙━⊷
┃ ⛥│◦➛📔ᩭ✎si deseas 🤝apoyarme mejor ayúdame y apóyame en mi cuenta oficial de 🌆YouTube y podrías regalarme una estrella en mi cuenta de git📈
┃ ⛥│◦➛🍀ᩭ✎𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁
┃ ⛥│◦➛📚ᩭ✎http://wa.me/50664570362 
┃ ⛥│◦➛📔ᩭ✎𝚃𝚞𝚝𝚘𝚛𝚒𝚊𝚕: 𝚙𝚕𝚊𝚢
┃ ⛥│◦➛🍀ᩭ✎https://youtu.be/6FYKkeBCTdw
┃ ⛥│◦➛☃️ᩭ✎𝙶𝙸𝚃 𝙲𝙻𝙾𝙽𝙴
┃ ⛥│◦➛📚ᩭ✎https://github.com/DraJer10/HATSUNE-MIKU.git
┃ ⛥│◦➛📔ᩭ✎voy a agradecer ☘️mucho su apoyo 📚 
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷`
let buttonMessage= {
'document': { url: `https://www.youtube.com/channel/UCppjg-y1T37RV1DDtQbU-EQ` },
'mimetype': `application/${document}`,
'fileName': `𝐆𝐀𝐙𝐀-𝐁𝐎𝐓`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/DraJer10/HATSUNE-MIKU.git',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCppjg-y1T37RV1DDtQbU-EQ' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: '💥ɪɴsᴛᴀʟᴀʀʙᴏᴛ🤖'}, type: 1}, 
{buttonId: `${usedPrefix}sc`, buttonText: {displayText: '🧿ᴄᴜᴇɴᴛᴀs🏓'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i

export default handler
