//HAI NAMAKU ZAKI AKU SEDANG MENCOBA MEMBUAT SELFBOT DAN PASTI BANYAK YANG COPY PASTE DISINI//
//***********LOAD MODULE****************//
const
	    {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WAimageMessage,
		WA_MESSAGE_STUB_TYPES,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const fs = require("fs");
const brainly = require("brainly-scraper");
const axios = require("axios");
const os = require('os');
const util = require('util');
const ffmpeg = require('fluent-ffmpeg');
const imgbb = require('imgbb-uploader');
const imageToBase64 = require('image-to-base64');
const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils')
const { removeBackgroundFromImageFile } = require('remove.bg');
const { spawn, exec, execSync } = require("child_process")
const speed = require('performance-now') 

//************LOAD LIB******************//
const { color, bgcolor } = require('./lib/color');
const { fetchJson } = require('./lib/fetcher');
const { recognize } = require('./lib/ocr');
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success } = require('./lib/functions');

//************LOAD JSON*****************//
const setiker = JSON.parse(fs.readFileSync('./src/stick.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const setting = JSON.parse(fs.readFileSync('./setting.json'))

//************SETTINGS******************//
publik = false
prefix = setting.prefix
fake = setting.fake
targetprivate = ''
blocked = []
banChat = true
alasanoff = 'Tidur'
lol = setting.lol
zeks = setting.zeks
imgbb_key = setting.imgbb_key
const vcard = 'BEGIN:VCARD\n'  // Jan diubah,Ntar Error
            + 'VERSION:3.0\n'  // Jan diubah,Ntar Error
            + 'FN:Ahmadzaki\n'  // Ganti jadi namamu
            + 'ORG: PEMBUAT SELFBOT;\n'  // Ganti jadi namamu/Botmu
            + 'TEL;type=CELL;type=VOICE;waid=6283873394995:+6283873394995\n'  // Ganti jadi nomormu, tapi jangan ubah pomekya
            + 'END:VCARD' // Jan diubah,Ntar Error

//*************FUNTION******************//
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jamnya ${pad(minutes)} Menitnya ${pad(seconds)} Detiknya`
}
const zakinew = fs.readFileSync('./temp/image/zakinew.jpeg')

async function starts() {
	const zaki = new WAConnection()
	zaki.logger.level = 'warn'
	zaki.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./session.json') && zaki.loadAuthInfo('./session.json')
	zaki.on('connecting', () => {
		start('2', 'Connecting...')
	})
	zaki.on('open', () => {
		success('2', '[BOT] BOT is now online!')
	})
	await zaki.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(zaki.base64EncodedAuthInfo(), null, '\t'))
        console.log('=> Bot succsessfully loaded!')
        lolcatjs.fromString('[DEV] Welcome back Owner! Hope you are doing well-')
        
      zaki.on('CB:Blocklist', json => {

	if (blocked.length > 2) return

	for (let i of json[1].blocklist) {
		blocked.push(i.replace('c.us', 's.whatsapp.net'))
	}
})

zaki.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	})
	
	zaki.on('message-update', async(gens) => {
    try {

    	const from = gens.key.remoteJid
	    const messageStubType = WA_MESSAGE_STUB_TYPES[gens.messageStubType] || 'MESSAGE'
        const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
        const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
        const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
        const sender = gens.key.fromMe ? zaki.user.jid : gens.key.remoteJid.endsWith('@g.us') ? gens.participant : gens.key.remoteJid
        const isRevoke = gens.key.remoteJid.endsWith('@s.whatsapp.net') ? true : gens.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
        const isCtRevoke = gens.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
        const isBanCtRevoke = gens.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
        if (messageStubType == 'REVOKE') {
        	console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
            console.log(color('[SYSTEM]', 'cyan'), color('Yang hapus pesan siapa tuh kak, Xixixi', 'yellow'), color('(😆)', 'white'))
            if (!isRevoke) return
            if (!isCtRevoke) return
            if (!isBanCtRevoke) return
            const from = gens.key.remoteJid
            const isGroup = gens.key.remoteJid.endsWith('@g.us') ? true : false
            let int
            let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
            const id_deleted = gens.key.id
            const conts = gens.key.fromMe ? zaki.user.jid : zaki.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = gens.key.fromMe ? zaki.user.name : conts.notify || conts.vname || conts.name || '-'
            const opt4tag = {
                contextInfo: { mentionedJid: [sender] }
            }
            for (let i = 0; i < infoMSG.length; i++) {
                if (infoMSG[i].key.id == id_deleted) {
                    const dataInfo = infoMSG[i]
                    const type = Object.keys(infoMSG[i].message)[0]
                    const timestamp = infoMSG[i].messageTimestamp
                    int = {
                        no: i,
                        type: type,
                        timestamp: timestamp,
                        data: dataInfo
                    }
                }
            }
            const index = Number(int.no)
            const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
            const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
            if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
                const strConversation = `\`\`\`❏ Nama : @${sender.split('@')[0]}\`\`\`
\`\`\`❏ Tipe : Text\`\`\`
\`\`\`❏ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}\`\`\`
\`\`\`❏ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}\`\`\`
\`\`\`❏ Pesan : ${body ? body : '-'}\`\`\``
                zaki.sendMessage(from, strConversation, MessageType.text, { thumbnail: zakinew, sendEphemeral: true, contextInfo: { mentionedJid: [sender] }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { conversation: `*ANTI-DELETE*\n${pushname} , Telah Menghapus Pesan`}}})
} else if (int.type == 'stickerMessage') {
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await zaki.downloadAndSaveMediaMessage(int.data, `./temp/${filename}`);
                const strConversation = `\`\`\`❏ Nama : @${sender.split('@')[0]}\`\`\`
\`\`\`❏ Tipe : Sticker\`\`\`
\`\`\`❏ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}\`\`\`
\`\`\`❏ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}\`\`\``
                const buff = fs.readFileSync(savedFilename)
                const pingbro25 = { quoted: { key: { fromMe: false, participant: sender, ...(from ? { remoteJid: from} : {}) }, message:{ "stickerMessage":int.data}}}
                zaki.sendMessage(from, strConversation, MessageType.text, { thumbnail: zakinew, sendEphemeral: true, contextInfo: { mentionedJid: [sender], forwardingScore: 508, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { conversation: `*ANTI-DELETE*\n${pushname} , Telah Menghapus Sticker`}}})
                zaki.sendMessage(from, buff, MessageType.sticker, pingbro25)
                fs.unlinkSync(savedFilename)
                } else if (int.type == 'audioMessage') {
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await zaki.downloadAndSaveMediaMessage(int.data, `./temp/${filename}`);
                const strConversation = `\`\`\`❏ Nama : @${sender.split('@')[0]}\`\`\`
\`\`\`❏ Tipe : Audio\`\`\`
\`\`\`❏ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}\`\`\`
\`\`\`❏ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}\`\`\``
                const buff = fs.readFileSync(savedFilename)
                const pingbro26 = { quoted: { key: { fromMe: false, participant: sender, ...(from ? { remoteJid: from} : {}) }, message:{ "audioMessage":int.data}}}
                zaki.sendMessage(from, strConversation, MessageType.text, { thumbnail: zakinew, sendEphemeral: true, contextInfo: { mentionedJid: [sender], forwardingScore: 508, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { conversation: `*ANTI-DELETE*\n${pushname} , Telah Menghapus Audio`}}})
                zaki.sendMessage(from, buff, MessageType.audio, { mimetype: 'audio/mp4', duration: 999999999 }, pingbro26)
                fs.unlinkSync(savedFilename)
} else if (int.type == 'locationMessage') {
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await zaki.downloadAndSaveMediaMessage(int.data, `./temp/${filename}`);
                const strConversation = `\`\`\`❏ Nama : @${sender.split('@')[0]}\`\`\`
\`\`\`❏ Tipe : Location\`\`\`
\`\`\`❏ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}\`\`\`
\`\`\`❏ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}\`\`\``
                const buff = fs.readFileSync(savedFilename)
                const pingbro27 = { quoted: { key: { fromMe: false, participant: sender, ...(from ? { remoteJid: from} : {}) }, message:{ "locationMessage":int.data}}}
                zaki.sendMessage(from, strConversation, MessageType.text, { thumbnail: zakinew, sendEphemeral: true, contextInfo: { mentionedJid: [sender], forwardingScore: 508, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { conversation: `*ANTI-DELETE*\n${pushname} , Telah Menghapus Lokasi`}}})
                zaki.sendMessage(from, buff, MessageType.location, pingbro27)
                fs.unlinkSync(savedFilename)
} else if (int.type == 'liveLocationMessage') {
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await zaki.downloadAndSaveMediaMessage(int.data, `./temp/${filename}`);
                const strConversation = `\`\`\`❏ Nama : @${sender.split('@')[0]}\`\`\`
\`\`\`❏ Tipe : liveLocation\`\`\`
\`\`\`❏ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}\`\`\`
\`\`\`❏ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}\`\`\``
                const buff = fs.readFileSync(savedFilename)
                const pingbro28 = { quoted: { key: { fromMe: false, participant: sender, ...(from ? { remoteJid: from} : {}) }, message:{ "liveLocationMessage":int.data}}}
                zaki.sendMessage(from, strConversation, MessageType.text, { thumbnail: zakinew, sendEphemeral: true, contextInfo: { mentionedJid: [sender], forwardingScore: 508, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { conversation: `*ANTI-DELETE*\n${pushname} , Telah Menghapus Lokasi Terkini`}}})
                zaki.sendMessage(from, buff, MessageType.liveLocation, pingbro28)
                fs.unlinkSync(savedFilename)
                } else if (int.type == 'imageMessage') {
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await zaki.downloadAndSaveMediaMessage(int.data, `./temp/${filename}`);
                const buff = fs.readFileSync(savedFilename)
                const strConversation = `\`\`\`❏ Nama : @${sender.split('@')[0]}\`\`\`
\`\`\`❏ Tipe : Image\`\`\`
\`\`\`❏ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}\`\`\`
\`\`\`❏ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}\`\`\`
\`\`\`❏ Pesan : ${body ? body : '-'}\`\`\``
                zaki.sendMessage(from, buff, MessageType.image, { quoted: {key: {participant: `${numbernye}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `*ANTI-DELETE*\n${pushname} , Telah Menghapus Image`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}, contextInfo: { mentionedJid: [sender],forwardingScore: 508, isForwarded: true }, caption: strConversation})
                fs.unlinkSync(savedFilename)
                }
        }
    } catch (e) {
        console.log('Message : %s', color(e, 'green'))
    }
})

dila.on('message-new', async(mek) => {

		try {

			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			global.batrei = global.batrei ? global.batrei : []
			dila.on('CB:action,,battery', json => {
		    const batteryLevelStr = json[2][0][1].value
		    const batterylevel = parseInt(batteryLevelStr)
		    global.batrei.push(batterylevel)
	        })
	        const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
			mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = new Date().toLocaleDateString()
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
			const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
		    body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		    const args = body.trim().split(/ +/).slice(1)
		    const isCmd = body.startsWith(prefix)
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const arg = chats.slice(command.length + 2, chats.length)
		const botNumber = zaki.user.jid
		const ownerNumber = ["6285841959635@s.whatsapp.net"] // ganti nomer lu yo
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await zaki.chats.all()
		const groupMetadata = isGroup ? await zaki.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isUrl = (url) => {
			return (new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		const reply = (teks) => {
			zaki.sendMessage(from, teks, text, { quoted: ftoko })
		}
		const math = (teks) => {
				return Math.floor(teks)
			}
const fileurl = async(link, type) => {
 woy = await getBuffer(link)
 zaki.sendMessage(from, woy, type, {quoted:ftoko})
}
	//FAKE STATUS
	const fimg = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "imageMessage": { "mimetype": "image/jpeg","caption": `${setting.fake}`, 'jpegThumbnail': fs.readFileSync('./media/Rafizqi.jpg')}}
	}

   const ftoko = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/Rafizqi.jpg`)
					},
					"title": `${setting.fake}`,
					"description": "",
					"currencyCode": "IDR",
					"priceAmount1000": `${setting.harga_toko}`,
					"retailerId": "Self Bot",
					"productImageCount": 999
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
		const sendMess = (hehe, teks) => {
			zaki.sendMessage(hehe, teks, text)
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? zaki.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zaki.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": memberr } })
		}
const cheat = (teks) => {
			zaki.sendMessage(from, teks, text, { quoted: fdoc})
			}
offline = process.uptime()
waktuoff = `${kyun(offline)}`
if (!mek.key.fromMe && !isGroup && banChat == false) {
			cheat(`Mohon Maaf _@Rafizqi_ Sedang Offline!
			
*• Alasan:* ${alasanoff}

*• Sejak:* ${waktuoff}

_*Rafizqi-Self*_`)
					}
	
	if (!mek.key.fromMe && isGroup && banChat == false) {
			if (budy.includes('@6285841959635')) {
			cheat(`Mohon Maaf _@Rafizqi_ Sedang Offline!
			
*• Alasan:* ${alasanoff}

*• Sejak:* ${waktuoff}

_*Rafizqi-Self*_`)
	}
	}
    colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch (command) {
			  case 'help':

          case 'menu':

			runtime = process.uptime()
			teks = `${kyun(runtime)}`
          const moment = require('moment-timezone')
          const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')

			        let d = new Date
				    let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				
				var num = mek.participant
				gambar = fs.readFileSync('./src/help.jpg')
				fakee = fs.readFileSync('./src/fake.jpg')
			
				isi = `*◪ SELF-BOT*
				
*• Bot Type :* NodeJS
*• Lib :* Baileys
*• Prefix :* [ ${prefix} ] 
*• Creator :* ${setting.name}
*• Jam :* ${jmn}
*• Hari :* ${week} ${weton}
*• Tanggal :* ${calender}
*• Runtime :* ${teks}

*• ${prefix}gc* [ buka | tutup ]
*• ${prefix}gcname* [ nama ]
*• ${prefix}gcdesk* [ teks ]
*• ${prefix}linkgc* [ link ]
*• ${prefix}join* [ link ]
*• ${prefix}tagall* [ tagall ]
*• ${prefix}leave* [ keluar gc]
*• ${prefix}hidetag* [teks]
*• ${prefix}chat* [62xxx]
*• ${prefix}fdeface* [link|teks|teks]
*• ${prefix}getpic* [@tag]
*• ${prefix}fitnah* [ @tag teks|teks ]
*• ${prefix}fitnahpc* [ pribchat ]

*• ${prefix}ytmp3* [ link ]
*• ${prefix}ytmp4* [ link ]
*• ${prefix}playmp3* [ judul ]
*• ${prefix}ytsearch* [ Judul ]
*• ${prefix}tiktok* [ link tt ]
*• ${prefix}tiktokaudio* [ link tt ]
*• ${prefix}ig* [ link ig]
*• ${prefix}igtv* [ lnk ugtv ]
*• ${prefix}brainly* [ soal ]

*• ${prefix}apiteks* [ teks ]
*• ${prefix}attp* [ teks ]
*• ${prefix}lovemss*  [ teks ]
*• ${prefix}romance* [ teks ]
*• ${prefix}paperglass* [ teks ]
*• ${prefix}tahta* [ teks ]
*• ${prefix}toimg* [ reply img ]
*• ${prefix}tomp3* [ reply vid | vn ]
*• ${prefix}tovn* [ reply vid | vn ]
*• ${prefix}sticker* [ reply img ]
*• ${prefix}ocr* [ reply img ]

*• ${prefix}addsticker* [nama ]
*• ${prefix}getsticker* [nama ]
*• ${prefix}liststicker* [ jumlah ]
*• ${prefix}addvn* [ nama ]
*• ${prefix}getvn* [ nama ]
*• ${prefix}listvn* [ jumlah vn ]
*• ${prefix}addvideo* [ nama ]
*• ${prefix}getvideo* [ nama ]
*• ${prefix}listvideo* [ list vid ]
*• ${prefix}addimage* [ nama ]
*• ${prefix}getimage* [ nama ]
*• ${prefix}listimage* [ list img ]

*• ${prefix}antidelete* [ aktif|mati ]
*• ${prefix}antidelete* [ ctaktif|ctmati ]
*• ${prefix}antidelete* [ banct ]
*• ${prefix}setthumb* [ reply ]
*• ${prefix}setthumbhelp* [ menu ]
*• ${prefix}fakethumb* [ palsu ]
*• ${prefix}setprefix* [ simbol ]
*• ${prefix}settarget* [ target ]
*• ${prefix}setreply* [ teks ]
*• ${prefix}lolhumancek* [ api ]
*• ${prefix}mylolkey* [ api ]
*• ${prefix}speed* [ ping ]
*• ${prefix}settarget* [ fitnahp ]
*• ${prefix}block* [ @tag ]
*• ${prefix}unblock* [ @tag ]
*• ${prefix}blocklist* [ list ]
*• ${prefix}cekchat* [ list ]
*• ${prefix}forward* [ teks ]
*• ${prefix}batrei* [ cek ]
*• ${prefix}offline* [ alasan ]
*• ${prefix}online* [ on ]
*• ${prefix}lolhumancek* [ api ]

*• ${prefix}bass* [ option ]
*• ${prefix}tempo* [ option ]
*• ${prefix}volume* [ option ]
*• ${prefix}hode* [ reply vn ]
*• ${prefix}imut* [ reply vn ]
*• ${prefix}nightcore* [ reply vn ]

*• ${prefix}return* [ code ]
*• ${prefix}>* [ eval ]
*• ${prefix}run* [ run code]
*• ${prefix}$* [ exec ]

*❏ SELFBOT ❏*
`
zaki.sendMessage(from, gambar, image, { quoted: ftoko, caption: isi, thumbnail: fakee, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
}
})
start()