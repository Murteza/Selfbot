//©AhmadHLXx
//©Santy_gz
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
const { color, bgcolor } = require('./lib/color');
const { fetchJson } = require('./lib/fetcher');
const { recognize } = require('./lib/ocr');
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success } = require('./lib/functions');
const axios = require("axios");
const os = require('os');
const util = require('util');
const ffmpeg = require('fluent-ffmpeg');
const imgbb = require('imgbb-uploader');
const imageToBase64 = require('image-to-base64');
const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils')
const { removeBackgroundFromImageFile } = require('remove.bg');
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const { spawn, exec, execSync } = require("child_process")
const speed = require('performance-now')
const chalk = require('chalk');
const cfonts = require('cfonts');

//Settings
publik = false
fake = setting.fake
targetprivate = ''
blocked = []
banChat = true
alasanoff = 'Tidur'
lol = setting.lol
zeks = setting.zeks
imgbb_key = setting.imgbb_key
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:AhmadHLX\n' // Change To Your Name
            + 'ORG:Creator SELF BOT;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6283873394995:+62 838-7339-4995\n' // CHANGE YOUR NUMBER
            + 'END:VCARD'
//finction
function kyun(seconds) {
function pad(s) {
return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);
	return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
const zaknew = fs.readFileSync('./temp/image/zaknew.jpg')
async function starts() {
    const HLX = new WAConnection()
    const banner = cfonts.render(('Ahmad Zaky|X|Santy_Gz|SelfbotHLX'), {
        font: 'block',
        color: 'candy',
        align: 'center',
        gradient: ["red","cyan"],
        lineHeight: 1
      });
    HLX.logger.level = 'warn'
    console.log(banner.string)
	HLX.on('qr', () => {
        console.log(color (`Scan Qr Code`, 'aqua'))
    })
    
	fs.existsSync('./session.json') && HLX.loadAuthInfo('./session.json')
	HLX.on('connecting', () => {
		console.log(color ('⚠ Connecting...', 'red'))
	})
	HLX.on('open', () => {
		console.log(color ('Connected ♥️', 'green'))
	})
	await HLX.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./session.json', JSON.stringify(HLX.base64EncodedAuthInfo(), null, '\t'))
	await HLX.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./session.json', JSON.stringify(HLX.base64EncodedAuthInfo(), null, '\t'))
    
    HLX.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
		for (let i of json[1].blocklist) {
			blocked.push(i.replace('c.us', 's.whatsapp.net'))
		}
	})
	HLX.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log(color('[SYSTEM]', 'cyan'), color(`${callerId} Dia yang telepon kakak, HLX block ya kak`, 'yellow'), color('(😌)', 'white'))
        HLX.updatePresence(from, Presence.composing) 
        HLX.sendMessage(callerId, `\`\`\`Auto block System!\nJika ingin membuka block harap chat Owner\nwa.me/${owner}\`\`\``, MessageType.text)
        await sleep(5000)
        await HLX.blockUser(callerId, "add")
})
HLX.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	})

HLX.on('message-new', async (dixy) => {
	try {

		if (!dixy.message) return
		if (dixy.key && dixy.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(dixy)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
	 if (!dixy.message) return
	 if (dixy.key && dixy.key.remoteJid == 'status@broadcast') return
		const typei = Object.keys(dixy.message)[0]
		budo = (typei === 'conversation') ? dixy.message.conversation : (typei === 'extendedTextMessage') ? dixy.message.extendedTextMessage.text : ''
		if(dixy.key.fromMe){
		}
		if (!publik) {
		if (!dixy.key.fromMe) return
		}
		global.prefix
		global.blocked
		dixy.message = (Object.keys(dixy.message)[0] === 'ephemeralMessage') ? dixy.message.ephemeralMessage.message : dixy.message
		global.batrei = global.batrei ? global.batrei : []
		HLX.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})
		const content = JSON.stringify(dixy.message)
		const from = dixy.key.remoteJid
		const type = Object.keys(dixy.message)[0]
		var tipe = 'Teks'
		if (type == 'imageMessage') {
				tipe = 'Gambar'
		} else if (type == 'stickerMessage') {
				tipe = 'Stiker'
		} else if (type === 'extendedTextMessage' && content.includes('imageMessage')) {
				tipe = 'Reply Gambar'
		} else if (type === 'extendedTextMessage' && content.includes('stickerMessage')) {
				tipe = 'Reply Stiker'
		} else if (type === 'extendedTextMessage' && content.includes('audioMessage')) {
				tipe = 'Reply Audio'
		} else if (type === 'extendedTextMessage' && content.includes('videoMessage')) {
				tipe = 'Reply Video'
		} else if (type === 'extendedTextMessage' && content.includes('conversation')) {
				tipe = 'Reply Teks'
		} else if (type === 'extendedTextMessage' && content.includes('productMessage')) {
				tipe = 'Reply Produk'
		} else if (type === 'extendedTextMessage' && content.includes('documentMessage')) {
				tipe = 'Reply Dokumen'
		} else if (type === 'extendedTextMessage' && content.includes('orderMessage')) {
				tipe = 'Reply Orderan'
		} else if (type === 'extendedTextMessage' && content.includes('contactMessage')) {
				tipe = 'Reply Kontak'
		} else if (type === 'extendedTextMessage' && content.includes('imageMessage')) {
				tipe = 'Reply Lokasi'
		} else if (type === 'extendedTextMessage' && content.includes('mentionedJid')) {
				tipe = 'Menyebut Orang'
		} else if (type === 'extendedTextMessage' && content.includes('matchedText')) {
				tipe = 'Link'
		} else if (type == 'videoMessage') {
				tipe = 'Video'
		} else if (type == 'conversation') {
				tipe = 'Teks'
		} else {
				tipe = 'Belum Diketahui'
		}
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		body = (type === 'conversation' && dixy.message.conversation.startsWith(prefix)) ? dixy.message.conversation : (type == 'imageMessage') && dixy.message.imageMessage.caption.startsWith(prefix) ? dixy.message.imageMessage.caption : (type == 'videoMessage') && dixy.message.videoMessage.caption.startsWith(prefix) ? dixy.message.videoMessage.caption : (type == 'extendedTextMessage') && dixy.message.extendedTextMessage.text.startsWith(prefix) ? dixy.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? dixy.message.conversation : (type === 'extendedTextMessage') ? dixy.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)

		mess = {
			success: 'Berhasil!',
			error: {
				stick: 'Itu video gblk!',
				Iv: 'Linknya mokad:v'
			},
			mess: {
				ownerB: 'Grup only bruh...',
				ownerB: 'Owner grup only bruh...',
				ownerB: 'Lu siapa?',
				admin: 'Mimin grup only bruh...',
				Badmin: 'Jadiin gw admin dlu su!'
			}
		}

		const botNumber = HLX.user.jid
		const ownerNumber = ["6285841959635@s.whatsapp.net"] // ganti nomer lu yo
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? dixy.participant : dixy.key.remoteJid
		const totalchat = await HLX.chats.all()
		const groupMetadata = isGroup ? await HLX.groupMetadata(from) : ''
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
			HLX.sendMessage(from, teks, text, { quoted: ftoko })
		}
		const math = (teks) => {
				return Math.floor(teks)
			}
const fileurl = async(link, type) => {
 woy = await getBuffer(link)
 HLX.sendMessage(from, woy, type, {quoted:ftoko})
}
	//FAKE STATUS
	const fimg = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "imageMessage": { "mimetype": "image/jpeg","caption": `${setting.fake}`, 'jpegThumbnail': fs.readFileSync('./temp/image/zaki.jpg')}}
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
						"jpegThumbnail": fs.readFileSync(`./temp/image/zaki.jpg`)
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
			HLX.sendMessage(hehe, teks, text)
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? HLX.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : HLX.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": memberr } })
		}
const cheat = (teks) => {
			HLX.sendMessage(from, teks, text, { quoted: fdoc})
			}
offline = process.uptime()
waktuoff = `${kyun(offline)}`
if (!dixy.key.fromMe && !isGroup && banChat == false) {
			cheat(`Mohon Maaf _Hlxbotself_ Sedang Offline!
			
*• Alasan:* ${alasanoff}

*• Sejak:* ${waktuoff}

_*Hlxbotself*_`)
					}
	
	if (!dixy.key.fromMe && isGroup && banChat == false) {
			if (budy.includes('@6285841959635')) {
			cheat(`Mohon Maaf _Hlxbotself_ Sedang Offline!
			
*• Alasan:* ${alasanoff}

*• Sejak:* ${waktuoff}

_*Hlxbotself*_`)
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
				
				var num = dixy.participant
				gambar = fs.readFileSync('./src/help.jpg')
				fakee = fs.readFileSync('./src/fake.jpg')
			
				isi = `
╭───❲ INFO ABOUT ❳──────
│ *Group Bot 1* : https://chat.whatsapp.com/JNxkmhX2nzvAUx50IbBs1j
│ *Group Bot 2* : https://chat.whatsapp.com/Faz1qmFp1i8LjnTxjeDPnL
│❏ *IG* : https://Instagram.com/ahmadHLX_yo
│❏ *GITHUB* : https://github.com/AhmadHLXx
│❏ *REST API* : https://docs-api-HLX.herokuapp.com
╰────────────────────

╭──────❲ INFO BOT ❳─────
│❏Nama : ${botName}
│❏Time : ${jmn}
│❏Hari : ${week} ${weton}
│❏Calendar: ${calender}
│❏Total User : ${_registered.length}
│❏User Premium : ${premium.length}
│❏Total Chat : ${totalchat.length}
│❏Browser : Chrome
│❏WAConnection : Baileys
│❏Bot Version : 0.0.8
│❏Prefix : 「MULTI PREFIX」
│❏Aktif : ${getruntime}
╰────────────────────

╭────❲ GROUP INFO ❳─────
│❏ Event : ${Eventon}
│❏ Leveling : ${Leveling}
│❏ Welcome : ${Welkom}
│❏ AntiLink : ${AntiLink}
│❏ Antivirtex: ${Antivirtex}
│❏ AntiBadWord : ${BadWord}
╰────────────────────

╭────❲ DEVICE BOT ❳─────
│❏ Device : ${device_manufacturer}
│❏ Versi Whatsapp: ${wa_version}
│❏ Versi OS : ${os_version}
│❏ Versi Device : ${device_model}
│❏ RAM :  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB /  ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│❏ MCC : ${mcc}
│❏ MNC : ${mnc} 
╰────────────────────

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
HLX.sendMessage(from, gambar, image, { quoted: ftoko, caption: isi, thumbnail: fakee, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'offline':
		        if (!dixy.key.fromMe) return reply('Cmd Ini Khusus Owner')
		        if (args.length < 1) return reply('Apa alasan bot offline?')
				if (banChat === false) return
				banChat = false
				alasanoff = args.join(' ')
				waktuoff = `${time}`
				HLX.sendMessage(from, `_*Sucess offline!*_\n*• Alasan :* ${alasanoff}\n*• Waktu:* ${waktuoff}`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ftoko})
				break
				case 'creategc':
				 case 'buatgc':
				 if (!dixy.key.fromMe) return reply('Cmd Ini Khusus Owner')
				const namagc = args.join(' ')
				todcul = []
				for (let o of dixy)
		HLX.groupCreate(namagc, ben.participant)
        break
		case 'online':
		    if (!dixy.key.fromMe) return reply('Cmd Ini Khusus Owner')
		    if (banChat === true) return
			banChat = true
			HLX.sendMessage(from,'Berhasil Online', text, { contextInfo: {mentionedJid: [sender]}, quoted: ftoko})
			break
			case 'tag':
			case 'hidetag':
			members_id = []
			teks = (args.length > 1) ? args.join(' ').trim() : `${args.join(' ')}`
			for (let mem of groupMembers) {
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true, text, {quoted:ftoko})
			break
			case 'group':
			case 'grup':
			case 'gc':
				if (!isGroup) return reply(mess.only.group)
				if (args[0] === 'buka') {
				HLX.sendMessage(from, `*「 SUCKSES MEMBUKA GRUP 」*`, MessageType.text, ftoko)
				HLX.groupSettingChange(from, GroupSettingChange.messageSend, false)
				} else if (args[0] === 'tutup') {
				await HLX.groupSettingChange(from, GroupSettingChange.messageSend, true)
				HLX.sendMessage(from, `*「 SUKSES MENUTUP GRUP 」*`, MessageType.text, groupp)
				}
			break
			case 'gcname':
			await HLX.groupUpdateSubject(from, `${args.join(' ')}`)
				HLX.sendMessage(from, `*「 CHANGE TO ${args.join(' ')} 」*`, MessageType.text)
			break
			case 'gcdesk':
			await HLX.groupUpdateDescription(from, `${args.join(' ')}`)
				HLX.sendMessage(from, `*「 CHANGE TO ${args.join(' ')} 」*`, MessageType.text)
			break
			case 'uptime':
		    runtime = process.uptime()
			teks = `${kyun(runtime)}`
			HLX.sendMessage(from, `${teks}`, MessageType.text)
			break
			case 'fitnah':
			var split = args.join(' ').replace(/@|\d/gi, '').split('|')
			var taged = dixy.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const target = {
				contextInfo: {
				participant: taged,
				quotedMessage: {
				extendedTextMessage: {
				text: split[0]
				}
				}
				}
				}
				HLX.sendMessage(from, `${split[1]}`, MessageType.text, target)
			break
			case 'fitnahpc':
				jids = `${targetprivate}@s.whatsapp.net` // nomer target
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = dixy.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const options = {
				contextInfo: {
				quotedMessage: {
				extendedTextMessage: {
				text: split[0]
				}
				}
				}
				}
				const responye = await HLX.sendMessage(jids, `${split[1]}`, MessageType.text, options)
				await HLX.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
				break
case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return HLX.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
				if (isGroup) {
				if (isRevoke) return HLX.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
				dataRevoke.push(from)
				fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
				HLX.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
				} else if (!isGroup) {
				HLX.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
				}
				} else if (argz[1] == 'ctaktif') {
				if (!isGroup) {
				if (isCtRevoke) return HLX.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
				dataCtRevoke.data = true
				fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
				HLX.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
				} else if (isGroup) {
				HLX.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
				}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return HLX.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return HLX.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					HLX.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						HLX.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						HLX.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						HLX.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						HLX.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
	case 'linkgc':
				if (!isGroup) return reply(mess.only.group)

				const linkgc = await HLX.groupInviteCode(from)
				HLX.sendMessage(from, `https://chat.whatsapp.com/${linkgc}`, text, {quoted:ftoko})
				break
				case 'join':
		HLX.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Succes Bergabung Dalam Group')
break
case 'playmp3':
                case 'play':
				reply(`*Wait Sedang Proses...*`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    HLX.sendMessage(from, ini_buffer, image, { quoted: ftoko, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    HLX.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: ftoko })
                    break
                case 'ytsearch':
				reply(`proses...`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
				case 'tiktok':
 reply('wait')
 pe = args.join(' ')
  anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${pe}`)
teks = `Nih Boss Videonya...`
					buffer = await getBuffer(`${anu.result}`)
					HLX.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ftoko, caption: teks})
				break
               case 'ig':
                 pe = args.join(' ')
                 anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${pe}`)
                buf = await getBuffer(`${anu.result.video}`)
                HLX.sendMessage(from, buf, video, {quoted:ftoko, caption: `Nih Boss` })
                 break
                 case 'igtv':
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/igtv/?url=${pe}`)
 buf = await getBuffer(`${anu.result.video_url}`)
 HLX.sendMessage(from, buf, video, {quoted:ftoko, caption: `Nih Boss` })
 break
 case 'lirik':
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${pe}`)
 buf = await getBuffer(`${anu.result.lirik}`)
 HLX.sendMessage(from, buf, text, {quoted:ftoko })
 break
 case 'ytmp3':
 pe = args.join(' ')
 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 HLX.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
 break
 case 'tiktokaudio':
 pe = args.join(' ')
 anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/tiktok_audio?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 HLX.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
 break
 case 'ytmp4':
 pe = args.join(' ')
 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 HLX.sendMessage(from, buf, video, {mimetype: 'video/mp4', quoted: ftoko})
                break
				case 'imut':
					encmedia = JSON.parse(JSON.stringify(dixy).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await HLX.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						HLX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftoko})
				fs.unlinkSync(ran)
				})
				break
			    case 'return':
				return HLX.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: ftoko})
				break
			case 'tomp3':
				HLX.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await HLX.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					HLX.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko})
						fs.unlinkSync(ran)
					   })
			break
			case 'getsticker':
			case 'gets':
				var itsme = `${numbernye}@s.whatsapp.net`
				namastc = args.join(' ')
				result = fs.readFileSync(`./media/sticker/${namastc}.webp`)
				HLX.sendMessage(from, result, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "${setting.name}", 'jpegThumbnail': fs.readFileSync('./temp/image/zaki.jpg')}}}})
			break
			case 'stickerlist':
			case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				HLX.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": setiker } })
				break
			    case 'addsticker':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = args.join(' ')
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await HLX.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				HLX.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: ftoko })
				break
			case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya blokk!')
				svst = args.join(' ')
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await HLX.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				HLX.sendMessage(from, `Sukses Menambahkan  Vn\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: ftoko })
			break
			case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
				teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				HLX.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": audionye } })
				break
			case 'addimage':
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				svst = args.join(' ')
				if (!svst) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await HLX.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
				HLX.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: ftoko })
			break
			case 'getimage':
				namastc = args.join(' ')
				buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
				HLX.sendMessage(from, buffer, image, { quoted: ftoko, caption: `Result From Database : ${namastc}.jpeg` })
				break
			case 'imagelist':
			case 'listimage':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				HLX.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": imagenye } })
			break
			case 'addvideo':
				svst = args.join(' ')
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await HLX.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
				fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
				HLX.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: ftoko })
			break
			case 'getvideo':
				namastc = args.join(' ')
				buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
				HLX.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: ftoko })
			break
			case 'videolist':
			case 'listvideo':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*`
				HLX.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": videonye } })
				break
	case 'leave':   

				HLX.sendMessage(from, 'Byeeee kawann', MessageType.text)

				anu = await HLX.groupLeave(from, 'See you........', groupId)
			break
			case 'chatlist':
			case 'cekchat':
				HLX.updatePresence(from, Presence.composing)
				teks = `Total : ${totalchat.length}`
				HLX.sendMessage(from, teks, text, {quoted:ftoko})
				break
                case 'speed':
                case 'ping':
				var groups = HLX.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = HLX.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestamp = speed();
					const totalChat = await HLX.chats.all()
					var charge = charging ? 'true' : 'false'
					var listrik = charging ? '⚡' : ''
					const latensi = speed() - timestamp
					var total = math(`${groups.length}*${privat.length}`)
					teks = `*BOT STATISTICS:*\n*- Group Chats :* ${groups.length}\n*- Private Chats :* ${privat.length}\n*- Total Chats :* ${totalChat.length}\n*- Speed :* ${latensi.toFixed(4)} _Second_\n*- Active Time :* ${kyun(uptime)}\n\n*PHONE STATISTICS:*\n*- Baterai :* ${JSON.stringify(baterai)}%${listrik}\n*- Charging Status :* ${charge}\n*- Penggunaan Ram :* ${ram2}\n*- Platform :* ${os.platform()}\n*- Hostname :* ${os.hostname()}\n*- Uptime :* ${kyun(os.uptime())}\n*- Wa Version:* ${HLX.user.phone.wa_version}\n*- Os Version:* ${HLX.user.phone.os_version}\n*- Device Manufacturer:* ${HLX.user.phone.device_manufacturer}\n*- Device Model:* ${HLX.user.phone.device_model}\n*- Os Build Number:* ${HLX.user.phone.os_build_number}`
					HLX.sendMessage(from, teks, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                break
			    case '$':
				const cmd = args.join(' ')
				exec(cmd, (err, stdout) => {
					if (err) return HLX.sendMessage(from, `${err}`, text, { quoted: ftoko })
					if (stdout) {
					HLX.sendMessage(from, stdout, text, { quoted:ftoko})
				}
				})
				break
				case 'batrei':
				 case 'battrey':
         let batreiNow = global.batrei[global.batrei.length - 1]
         HLX.sendMessage(from, `${batreiNow}%`, text)
        break
		case 'gtts':
		case 'tts':
				if (args.length < 1) return HLX.sendMessage(from, 'kode bahasa nya mna?', text, { quoted: ftoko })
				encmedia = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return HLX.sendMessage(from, '𝗧𝗲𝗸𝘀 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶𝗷𝗮𝗱𝗶𝗶𝗻 𝘀𝘂𝗮𝗿𝗮 𝗺𝗮𝗻𝗮 𝘁𝗼𝗱? 𝘁𝘆𝘁𝗱 𝗸𝗮𝗵?', text, { quoted: ftoko })
				dtt = args.join(' ')
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
					? reply('𝗜𝗱𝗶𝗵 𝗻𝗴𝗲𝗹𝘂𝗻𝗷𝗮𝗸 𝗻𝗴𝗲𝗻𝘁𝗼𝗱, 𝘁𝗲𝗸𝘀𝗻𝘆𝗮 𝗷𝗮𝗻𝗴𝗮𝗻 𝗸𝗲𝗽𝗮𝗻𝗷𝗮𝗻𝗴𝗮𝗻 😤')
					: gtts.save(ranm, dtt, function () {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
							HLX.sendMessage(from, buff, encmedia, audio, { quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
							fs.unlinkSync(rano)
						})
					})
			break
			case 'setprefix':
				prefix = args.join(' ')
				HLX.sendMessage(from, `Succes Mengganti Prefix : ${prefix}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
			break
			case 'settarget':
				if (args.length < 1) return
				targetprivate = args[0]
				HLX.sendMessage(from, `Succes Mengganti target Private Fake Reply : ${targetprivate}`, text, {quoted:ftoko})
				break
			case 'tagall':
				members_id = []
				teks = (args.length > 1) ? args.join(' ').trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
					teks += `Mampus! @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
			case 'clearall':
				if (!isOwner) return reply('𝙡𝙪 𝙨𝙞𝙖𝙥𝙖 𝙩𝙤𝙙?')
				anu = await HLX.chats.all()
				HLX.setMaxListeners(25)
				for (let _ of anu) {
					HLX.deleteChat(_.jid)
				}
				reply('𝗰𝗹𝗲𝗮𝗿 𝗮𝗹𝗹 𝘀𝘂𝗸𝘀𝗲𝘀 𝘆𝗮𝗵 𝘁𝗼𝗱 :)')
				break
				case 'block':
					HLX.updatePresence(from, Presence.composing) 
				    HLX.blockUser (`${args.join(' ')}@c.us`, "add")
					HLX.sendMessage(from, `𝗦𝘂𝗸𝘀𝗲𝘀 𝗠𝗲𝗺𝗯𝗹𝗼𝗸𝗶𝗿`, text)
				break
				case 'unblock':
					HLX.updatePresence(from, Presence.composing) 
					HLX.blockUser (`${args.join(' ')}@c.us`, "remove")
					HLX.sendMessage(from, `𝗦𝘂𝗸𝘀𝗲𝘀 𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗶𝗿`, text)
			break 
			case 'bc':
				if (args.length < 1) return reply('.......')
				anu = await HLX.chats.all()
				if (isMedia && !dixy.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dixy
					buff = await HLX.downloadMediaMessage(encmedia)
					for (let _ of anu) {
						HLX.sendMessage(_.jid, buff, image, { caption: `❮ 𝙋𝙀𝙎𝘼𝙉 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${args.join(' ')}` })
					}
					reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
				} else {
					for (let _ of anu) {
					sendMess(_.jid, `*INFO NEW*\n\n${args.join(' ')}`)
					}
					reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
				    }
			break
			case 'add':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Yang mau di add jin ya?')
				if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
				try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					HLX.groupAdd(from, [num])
				} catch (e) {
					console.log('Error :', e)
					return HLX.sendMessage(from, 'Diprivate asu:v', MessageType.text)
				}
			break
			case 'promote':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (dixy.message.extendedTextMessage === undefined || dixy.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
				mentioned = dixy.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = 'Perintah di terima, Promote :\n'
					for (let _ of mentioned) {
					teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					HLX.groupMakeAdmin(from, mentioned)
				} else {
					mentions(`Perintah di terima, Promote : @${mentioned[0].split('@')[0]}`, mentioned, true)
					HLX.groupMakeAdmin(from, mentioned)
				}
			break
			case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (dixy.message.extendedTextMessage === undefined || dixy.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
				mentioned = dixy.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = 'Perintah di terima, Demote :\n'
					for (let _ of mentioned) {
					teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					HLX.groupDemoteAdmin(from, mentioned)
				} else {
					mentions(`Perintah di terima, Demote : @${mentioned[0].split('@')[0]}`, mentioned, true)
					HLX.groupDemoteAdmin(from, mentioned)
				}
			break
			case 'listadmin':
				if (!isGroup) return reply(mess.only.group)
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
				no = 0
				for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
				}
				mentions(teks, groupAdmins, true)
			break
			case 'toimg':
					if (!isQuotedSticker) return reply('stickernya mana block!')
					reply('[ Wait ] Sabarr...')
					encmedia = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await HLX.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('itu sticker?')
						buffer = fs.readFileSync(ran)
						HLX.sendMessage(from, buffer, image, { caption: 'Done bruhh' })
						fs.unlinkSync(ran)
					});
			break
			case 'clone':
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('𝘁𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶 𝗰𝗹𝗼𝗻𝗲!!!')
				if (dixy.message.extendedTextMessage === undefined || dixy.message.extendedTextMessage === null) return reply('Tag cvk')
				mentioned = dixy.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let {jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
					pp = await HLX.getProfilePicture(id)
					buffer = await getBuffer(pp)
					HLX.updateProfilePicture(botNumber, buffer)
					mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
					reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
				}
			break
	case 'wait':

				if ((isMedia && !dixy.message.videoMessage || isQuotedImage) && args.length == 0) {

					reply(mess.wait)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dixy
					media = await HLX.downloadMediaMessage(encmedia)
					await wait(media).then(res => {
					HLX.sendMessage(from, res.video, video, { quoted: ftoko, caption: res.teks.trim() })
					}).catch(err => {
					reply(err)
					})
				} else {
					reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 𝗼𝗰𝗿')
				}
				break
				case 'dadu':
				kapankah = args.join(' ')
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					HLX.sendMessage(from, ule, text, { quoted: ftoko })
					break
					
					case 'brainly':
                    brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*Pertanyaan:* ${Y.pertanyaan}\n\n*Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`
					}
					HLX.sendMessage(from, teks, text, {quoted: ftoko})
                        console.log(res)
                    })
                
               break
			  case 'bass':     
               var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(dixy).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await HLX.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						HLX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
					fs.unlinkSync(ran)
					})
				break
				case 'trigger':
					   encmedia = JSON.parse(JSON.stringify(dixy).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await HLX.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						HLX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
				case 'tebakgambar':
                anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					HLX.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					HLX.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					HLX.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					HLX.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					HLX.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: ftoko }) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'apiteks':
				   if (args.length < 1) return reply('Teksnya mana um')
					love = args.join(' ')
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
                    reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${love}&apikey=${zeks}`, {method: 'get'})
					HLX.sendMessage(from, bufferxcz, image, {quoted: ftoko, caption: ' '+love})
				break
				case 'kick':
				   if (dixy.message.extendedTextMessage === undefined || dixy.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = dixy.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
						teks += `Bismillah atas izin admin grup kamu akan saya tendang 🏃 :\n`
						teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						HLX.groupRemove(from, mentioned)
					} else {
					mentions(`Bye Bye Beban Grup@${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
					HLX.groupRemove(from, mentioned)
					}
					break
					case 'ttp':
				res = await getBase64(anu.base64)
				HLX.sendMessage(from, res, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break
case 'bitly':
				HLX.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args.join(' ')}&apikey=BotWeA`)
                hasil = `link : ${args.join(' ')}\n\nOutput : ${data.result}`
                reply(hasil)
                //
                break
case '>':
var konsol = args.join(' ')
function sendResult(sul) {
var sat = JSON.stringify(sul, null, 2)
var bang = util.format(sat)
return reply(bang)
}
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
break
case 'fast':
					encmedia = JSON.parse(JSON.stringify(dixy).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await HLX.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					HLX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
					fs.unlinkSync(ran)
					})
			        break
			        case 'kicktime':
			         if (dixy.message.extendedTextMessage === undefined || dixy.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
			        mentioned = dixy.message.extendedTextMessage.contextInfo.mentionedJid
		            if (mentioned.length > 1) {
					teks = 'Perintah di terima, mengeluarkan :\n'
					for (let _ of mentioned) {
					teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					HLX.groupRemove(from, mentioned)
					} else {
					setTimeout( () => {
				    mentions(`OTW BOS KU , SIAP BRO? : @${mentioned[0].split('@')[0]}`, mentioned, true)
					}, 0) // 100 = 5s,
					setTimeout( () => {
					 HLX.sendMessage(from, 'GAPAKE LAMA LANGSUNG GW KICK AJA !', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 HLX.sendMessage(from, 'BYE BYE', text, { quoted: ftoko }) // ur cods
					}, 0) // 1000 = 5s,
					}
					break
					case 'tiktod':
					var gh = args.join(' ')
					var gli = gh.split("|")[0];
					var tch = gh.split("|")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}glitchtext test|test`)
					buffer = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${gli}&text2=${tch}&APIKEY=${XteamKey}`)
					HLX.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					//
					break
					case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(dixy).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await HLX.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					HLX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
			       })
		           break
	               case 'cmd':
	           var teks = encodeURIComponent(args.join(' '))
				if (!teks) return HLX.sendMessage(from,  msgType.text, { quoted: ftoko })
                var buffer  = await  getBuffer(`https://api-rull.herokuapp.com/api/cmd?code=${teks}`)
HLX.sendMessage(from, buffer, image)
            break
            case 'lolhumancek':
            case 'ceklolkey':
            anunye = await fetchJson(`http://api.lolhuman.xyz/api/checkapikey?apikey=${args.join(' ')}`)
            nganu = `❒ *Username :* ${anunye.result.username}
❒ *Sisa Limit :* ${anunye.result.requests}
❒ *Type :* ${anunye.result.account_type}
❒ *Expired :* ${anunye.result.expired}` 
             HLX.sendMessage(from, nganu, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
            break
            case 'mylolkey':
             anunye = await fetchJson(`http://api.lolhuman.xyz/api/checkapikey?apikey=${args.join(' ')}`)
             nganu = `❒ *Username :* ${anunye.result.username}
❒ *Sisa Limit :* ${anunye.result.requests}
❒ *Type :* ${anunye.result.account_type}
❒ *Expired :* ${anunye.result.expired}` 
              HLX.sendMessage(from, nganu, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
              break
              case 'attp':
					if (args.length < 1) return reply('Textnya mana gan?')
					var teks = encodeURIComponent(args.join(' '))
					const attp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					HLX.sendMessage(from, attp, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'forward':
					 case 'fw':
HLX.sendMessage(from, `${args.join(' ')}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break
            case 'del':
            case 'd':
               HLX.deleteMessage(from, { id: dixy.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'tovid':
 case 'tomp4':
var imgbb = require('imgbb-uploader')
if ((isMedia && !dixy.message.StickerMessage || isQuotedSticker) && args.length == 0) {
  ted = isQuotedSticker ? JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: dixy
  reply(mess.wait)
  owgi = await HLX.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await fetchJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${lol}&img=`)
 HLX.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}

case 'stiker':
case 'sticker':
 case 's': 
var imgbb = require('imgbb-uploader')
if ((isMedia && !dixy.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: dixy
  reply(mess.wait)
  owgi = await HLX.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=${anu.display_url}`)
 HLX.sendMessage(from, hedhe, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
 case 'swm':
var imgbb = require('imgbb-uploader')
if ((isMedia && !dixy.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: dixy
  reply(mess.wait)
  owgi = await HLX.downloadAndSaveMediaMessage(ted)
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lol}&img=${anu.display_url}&package=${setting.package_name}&author=${setting.author}`)
 HLX.sendMessage(from, hedhe, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'lovemss':
if (args.length < 1) return reply(`Contoh: ${prefix}lovemss Rafizqi`)
lop = args.join(' ')
reply(mess.wait)
lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
HLX.sendMessage(from, lepms, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'paperglass':
if (args.length < 1) return reply(`Contoh: ${prefix}paperglass Rafizqi`)
papg = args.join(' ')
reply(mess.wait)
gelas = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
HLX.sendMessage(from, gelas, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'romance':
if (args.length < 1) return reply(`Contoh: ${prefix}romance Rafizqi`)
roce = args.join(' ')
reply(mess.wait)
roma = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`)
HLX.sendMessage(from, roma, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'chat':
nonya = args.join(' ')
teksnya = nonya.split("|")[0];
HLX.sendMessage(`${nonya}@s.whatsapp.net`, `${teksnya}`, text)
break

                     case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(dixy).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await HLX.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						HLX.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })
				  break 
				  case 'getpic':
					if (args.length < 1) return 
					if (dixy.message.extendedTextMessage === undefined || dixy.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = dixy.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await HLX.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						HLX.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
						HLX.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
				break
				case 'hack':
				case 'fdeface':
				var nn = args.join(' ')
				var urlnye = nn.split("|")[0];
				var titlenye = nn.split("|")[1];
				var descnye = nn.split("|")[2];
				imgbbb = require('imgbb-uploader')
				run = getRandom('.jpeg')
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dixy
				media = await HLX.downloadAndSaveMediaMessage(encmedia)
				ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))

				HLX.sendMessage(from, {

					text: `${urlnye}`,

					matchedText: `${urlnye}`,

					canonicalUrl: `${urlnye}`,

					description: `${descnye}`,

					title: `${titlenye}`,

					jpegThumbnail: ddatae
				}, 'extendedTextMessage', { detectLinks: false })
				break
case 'toaudio':
			HLX.updatePresence(from, Presence.composing)
				if (!isQuotedAudio)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await HLX.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply('Yahh emrror bruh:(')
				buffer = fs.readFileSync(ran)
				HLX.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko})
				})
				break
				case 'tovn':
				HLX.updatePresence(from, Presence.composing)
				if (!isQuotedAudio)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await HLX.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply('Yahh emrror bruh:(')
				buffer = fs.readFileSync(ran)
				HLX.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				  })
				  break
                case 'public':
	            case 'publik':
	              publik = true
	              HLX.sendMessage(dixy.key.remoteJid, `「 *PUBLIC-MODE* 」`, MessageType.text, { quoted:ftoko})
			    break
			    case 'self':
				publik = false
				HLX.sendMessage(dixy.key.remoteJid, `「 *SELF-MODE* 」`, MessageType.text, { quoted:ftoko})
			break
			case 'toaudio':
				HLX.updatePresence(from, Presence.composing)
				if (!isQuotedAudio) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await HLX.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply('Yahh emrror bruh:(')
HLX.sendMessage(from, buffer, audio, { mimetype: 'ptt', quoted: ftoko, duration:99999999999999999999999})
				fs.unlinkSync(ran)
				})
				break
				case 'setthumb':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
				const thumbreply = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downreply = await HLX.downloadMediaMessage(thumbreply)
				fs.unlinkSync(`./temp/image/zaki.jpg`)
				fs.writeFileSync(`./temp/image/zaki.jpg`, downreply)
			HLX.sendMessage(from, `Berhasil Mengganti Thumbnail Reply`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Sucess", 'jpegThumbnail': fs.readFileSync('./temp/image/zaki.jpg')}}}})
break
case 'setthumbhelp':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
				const thumbmenu = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downmenu = await HLX.downloadMediaMessage(thumbmenu)
				fs.unlinkSync(`./src/help.jpg`)
				fs.writeFileSync(`./src/help.jpg`, downmenu)
				anu = fs.readFileSync('./src/help.jpg')
				anuu = fs.readFileSync('./src/fake.jpg')
				HLX.sendMessage(from, anu, image, { quoted:ftoko, caption: `Berhasil Mengubah Thimbnail Menu`, thumbnail: anuu})
break
case 'fakethumb':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
				const fakethumb = JSON.parse(JSON.stringify(dixy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downfake = await HLX.downloadMediaMessage(fakethumb)
				fs.unlinkSync(`./src/fake.jpg`)
				fs.writeFileSync(`./src/fake.jpg`, downfake)
				anu = fs.readFileSync('./src/fake.jpg')
				HLX.sendMessage(from, anu, image, { quoted:ftoko, caption: `Berhasil Mengubah FakeThumb`})
break
case 'getvn':
 namastc = args.join(' ')
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				HLX.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
 break
		default:
		HLX.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		console.log('battrey ' + batterylevel)
					})
					console.log(color('Rafisqi', 'yellow'), color(sender.split('@')[0]))
	}
	} catch (e) {
		console.log('%s', color(e, 'green'))
	}
}) 
start() 