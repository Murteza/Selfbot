//HAI NAMAKU ZAKI AKU SEDANG MENCOBA MEMBUAT SELFBOT DAN PASTI BANYAK YANG COPY PASTE DISINI//
//***********LOAD MODULE**************//
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
const lolcatjs = require('lolcatjs');
const figlet = require('figlet');
const ffmpeg = require('fluent-ffmpeg');
const imgbb = require('imgbb-uploader');
const imageToBase64 = require('image-to-base64');
const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils')
const { removeBackgroundFromImageFile } = require('remove.bg');
const { spawn, exec, execSync } = require("child_process")
const speed = require('performance-now') 

//************LOAD LIB****************//
const { color, bgcolor } = require('./lib/color');
const { fetchJson } = require('./lib/fetcher');
const { recognize } = require('./lib/ocr');
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success } = require('./lib/functions');

//************LOAD JSON***************//
const setiker = JSON.parse(fs.readFileSync('./src/stick.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const setting = JSON.parse(fs.readFileSync('./setting.json'))

//************SETTINGS****************//
publik = false
fake = setting.fake
targetprivate = ''
blocked = []
prefix = setting.prefix
banChat = true
alasanoff = 'Tidur'
lol = setting.lol
zeks = setting.zeks
imgbb_key = setting.imgbb_key
const vcard = 'BEGIN:VCARD\n'  // Jan diubah,Ntar Error
            + 'VERSION:3.0\n'  // Jan diubah,Ntar Error
            + 'FN:Murteza\n'  // Ganti jadi namamu
            + 'ORG: Murteza;\n'  // Ganti jadi namamu/Botmu
            + 'TEL;type=CELL;type=VOICE;waid=6281336141029:+6281336141029\n'  // Ganti jadi nomormu, tapi jangan ubah pomekya
            + 'END:VCARD' // Jan diubah,Ntar Error

//*************FUNTION****************//
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
	
	//ANTIDEL
zaki.on('message-update', async (hurtz) => {
	try {
		const from = hurtz.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = hurtz.key.fromMe ? zaki.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = hurtz.key.remoteJid
			const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = hurtz.key.id
			const conts = hurtz.key.fromMe ? zaki.user.jid : zaki.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = hurtz.key.fromMe ? zaki.user.name : conts.notify || conts.vname || conts.name || '-'
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
				const strConversation = `		 「 *ANTI-DELETE* 」

*• Nama :* ${pushname}
*• Nomer :* wa.me/${sender.split('@')[0]}
*• Tipe :* Text
*• Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
*• Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
*• Pesan :* ${body ? body : '-'}`
				zaki.sendMessage(from, strConversation, MessageType.text)
//MORE RAKIT SENDIRI :V
			}
		}
} catch (e) {
		console.log('Message : %s', color(e, 'red'))
		// console.log(e)
}
})

zaki.on('message-new', async (mek) => {
	try {
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
	 if (!mek.message) return
	 if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		const typei = Object.keys(mek.message)[0]
		budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		if(mek.key.fromMe){
		}
		if (!publik) {
		if (!mek.key.fromMe) return
		}
		global.prefix
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		global.batrei = global.batrei ? global.batrei : []
		zaki.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
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
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)

		mess = {
			success: 'Berhasil!',
			error: {
				stick: 'Itu video gblk!',
				Iv: 'Linknya mokad:v'
			},
			only: {
				ownerB: 'Grup only bruh...',
				ownerB: 'Owner grup only bruh...',
				group: 'Ini Khusus Group',
				ownerB: 'Lu siapa?',
				admin: 'Mimin grup only bruh...',
				Badmin: 'Jadiin gw admin dlu su!'
			}
		}

		const botNumber = zaki.user.jid
		const ownerNumber = ["6283873394995@s.whatsapp.net"] // ganti nomer lu yo
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
			if (budy.includes('@6283873394995')) {
			cheat(`Mohon Maaf _@Rafizqi_ Sedang Offline!
			
*• Alasan:* ${alasanoff}

*• Sejak:* ${waktuoff}

_*Rafizqi-Self*_`)
	}
	}
/**************COLORS*****************/
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
      const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mZAKI EXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mZAKI RECV\x1b[1;37m]', time, color('Message'), 'from', color(pushname), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mZAKI EXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mZAKI RECV\x1b[1;37m]', time, color('Message'), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
		
          switch(command){
			
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
case 'offline':
		        if (!mek.key.fromMe) return reply('Cmd Ini Khusus Owner')
		        if (args.length < 1) return reply('Apa alasan bot offline?')
				if (banChat === false) return
				banChat = false
				alasanoff = args.join(' ')
				waktuoff = `${time}`
				zaki.sendMessage(from, `_*Sucess offline!*_\n*• Alasan :* ${alasanoff}\n*• Waktu:* ${waktuoff}`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ftoko})
				break
				case 'creategc':
				 case 'buatgc':
				 if (!mek.key.fromMe) return reply('Cmd Ini Khusus Owner')
				const namagc = args.join(' ')
				todcul = []
				for (let o of mek)
		zaki.groupCreate(namagc, ben.participant)
        break
		case 'online':
		    if (!mek.key.fromMe) return reply('Cmd Ini Khusus Owner')
		    if (banChat === true) return
			banChat = true
			zaki.sendMessage(from,'Berhasil Online', text, { contextInfo: {mentionedJid: [sender]}, quoted: ftoko})
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
				zaki.sendMessage(from, `*「 SUCKSES MEMBUKA GRUP 」*`, MessageType.text, ftoko)
				zaki.groupSettingChange(from, GroupSettingChange.messageSend, false)
				} else if (args[0] === 'tutup') {
				await zaki.groupSettingChange(from, GroupSettingChange.messageSend, true)
				zaki.sendMessage(from, `*「 SUKSES MENUTUP GRUP 」*`, MessageType.text, groupp)
				}
			break
			case 'gcname':
			await zaki.groupUpdateSubject(from, `${args.join(' ')}`)
				zaki.sendMessage(from, `*「 CHANGE TO ${args.join(' ')} 」*`, MessageType.text)
			break
			case 'gcdesk':
			await zaki.groupUpdateDescription(from, `${args.join(' ')}`)
				zaki.sendMessage(from, `*「 CHANGE TO ${args.join(' ')} 」*`, MessageType.text)
			break
			case 'uptime':
		    runtime = process.uptime()
			teks = `${kyun(runtime)}`
			zaki.sendMessage(from, `${teks}`, MessageType.text)
			break
			case 'fitnah':
			var split = args.join(' ').replace(/@|\d/gi, '').split('|')
			var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
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
				zaki.sendMessage(from, `${split[1]}`, MessageType.text, target)
			break
			case 'fitnahpc':
				jids = `${targetprivate}@s.whatsapp.net` // nomer target
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const options = {
				contextInfo: {
				quotedMessage: {
				extendedTextMessage: {
				text: split[0]
				}
				}
				}
				}
				const responye = await zaki.sendMessage(jids, `${split[1]}`, MessageType.text, options)
				await zaki.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
				break
case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return zaki.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
				if (isGroup) {
				if (isRevoke) return zaki.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
				dataRevoke.push(from)
				fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
				zaki.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
				} else if (!isGroup) {
				zaki.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
				}
				} else if (argz[1] == 'ctaktif') {
				if (!isGroup) {
				if (isCtRevoke) return zaki.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
				dataCtRevoke.data = true
				fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
				zaki.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
				} else if (isGroup) {
				zaki.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
				}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return zaki.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return zaki.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					zaki.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						zaki.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						zaki.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						zaki.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						zaki.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
			case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
				const linkgc = await zaki.groupInviteCode(from)
				zaki.sendMessage(from, `https://chat.whatsapp.com/${linkgc}`, text, {quoted:ftoko})
				break
				case 'join':
		zaki.query({
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
                    zaki.sendMessage(from, ini_buffer, image, { quoted: ftoko, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    zaki.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: ftoko })
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
					zaki.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ftoko, caption: teks})
				break
               case 'ig':
                 pe = args.join(' ')
                 anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${pe}`)
                buf = await getBuffer(`${anu.result.video}`)
                zaki.sendMessage(from, buf, video, {quoted:ftoko, caption: `Nih Boss` })
                 break
                 case 'igtv':
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/igtv/?url=${pe}`)
 buf = await getBuffer(`${anu.result.video_url}`)
 zaki.sendMessage(from, buf, video, {quoted:ftoko, caption: `Nih Boss` })
 break
 case 'lirik':
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${pe}`)
 buf = await getBuffer(`${anu.result.lirik}`)
 zaki.sendMessage(from, buf, text, {quoted:ftoko })
 break
 case 'ytmp3':
 pe = args.join(' ')
 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 zaki.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
 break
 case 'tiktokaudio':
 pe = args.join(' ')
 anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/tiktok_audio?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 zaki.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: ftoko, ptt:true})
 break
 case 'ytmp4':
 pe = args.join(' ')
 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${pe}`)
 buf = await getBuffer(`${anu.result}`)
 zaki.sendMessage(from, buf, video, {mimetype: 'video/mp4', quoted: ftoko})
                break
				case 'imut':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zaki.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftoko})
				fs.unlinkSync(ran)
				})
				break
			    case 'return':
				return zaki.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: ftoko})
				break
			case 'tomp3':
				zaki.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await zaki.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					zaki.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko})
						fs.unlinkSync(ran)
					   })
			break
			case 'getsticker':
			case 'gets':
				var itsme = `${numbernye}@s.whatsapp.net`
				namastc = args.join(' ')
				result = fs.readFileSync(`./media/sticker/${namastc}.webp`)
				zaki.sendMessage(from, result, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "${setting.name}", 'jpegThumbnail': fs.readFileSync('./media/Rafizqi.jpg')}}}})
			break
			case 'stickerlist':
			case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				zaki.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": setiker } })
				break
			    case 'addsticker':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = args.join(' ')
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zaki.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				zaki.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: ftoko })
				break
			case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya blokk!')
				svst = args.join(' ')
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zaki.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				zaki.sendMessage(from, `Sukses Menambahkan  Vn\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: ftoko })
			break
			case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
				teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				zaki.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": audionye } })
				break
			case 'addimage':
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				svst = args.join(' ')
				if (!svst) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zaki.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
				zaki.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: ftoko })
			break
			case 'getimage':
				namastc = args.join(' ')
				buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
				zaki.sendMessage(from, buffer, image, { quoted: ftoko, caption: `Result From Database : ${namastc}.jpeg` })
				break
			case 'imagelist':
			case 'listimage':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				zaki.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": imagenye } })
			break
			case 'addvideo':
				svst = args.join(' ')
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zaki.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
				fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
				zaki.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: ftoko })
			break
			case 'getvideo':
				namastc = args.join(' ')
				buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
				zaki.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: ftoko })
			break
			case 'videolist':
			case 'listvideo':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*`
				zaki.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": videonye } })
				break
			case 'leave':   
				zaki.sendMessage(from, 'Byeeee kawann', MessageType.text)
				anu = await zaki.groupLeave(from, 'See you........', groupId)
			break
			case 'chatlist':
			case 'cekchat':
				zaki.updatePresence(from, Presence.composing)
				teks = `Total : ${totalchat.length}`
				zaki.sendMessage(from, teks, text, {quoted:ftoko})
				break
                case 'speed':
                case 'ping':
				var groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestamp = speed();
					const totalChat = await zaki.chats.all()
					var charge = charging ? 'true' : 'false'
					var listrik = charging ? '⚡' : ''
					const latensi = speed() - timestamp
					var total = math(`${groups.length}*${privat.length}`)
					teks = `*BOT STATISTICS:*\n*- Group Chats :* ${groups.length}\n*- Private Chats :* ${privat.length}\n*- Total Chats :* ${totalChat.length}\n*- Speed :* ${latensi.toFixed(4)} _Second_\n*- Active Time :* ${kyun(uptime)}\n\n*PHONE STATISTICS:*\n*- Baterai :* ${JSON.stringify(baterai)}%${listrik}\n*- Charging Status :* ${charge}\n*- Penggunaan Ram :* ${ram2}\n*- Platform :* ${os.platform()}\n*- Hostname :* ${os.hostname()}\n*- Uptime :* ${kyun(os.uptime())}\n*- Wa Version:* ${zaki.user.phone.wa_version}\n*- Os Version:* ${zaki.user.phone.os_version}\n*- Device Manufacturer:* ${zaki.user.phone.device_manufacturer}\n*- Device Model:* ${zaki.user.phone.device_model}\n*- Os Build Number:* ${zaki.user.phone.os_build_number}`
					zaki.sendMessage(from, teks, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                break
			    case '$':
				const cmd = args.join(' ')
				exec(cmd, (err, stdout) => {
					if (err) return zaki.sendMessage(from, `${err}`, text, { quoted: ftoko })
					if (stdout) {
					zaki.sendMessage(from, stdout, text, { quoted:ftoko})
				}
				})
				break
				case 'batrei':
				 case 'battrey':
         let batreiNow = global.batrei[global.batrei.length - 1]
         zaki.sendMessage(from, `${batreiNow}%`, text)
        break
		case 'gtts':
		case 'tts':
				if (args.length < 1) return zaki.sendMessage(from, 'kode bahasa nya mna?', text, { quoted: ftoko })
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return zaki.sendMessage(from, '𝗧𝗲𝗸𝘀 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶𝗷𝗮𝗱𝗶𝗶𝗻 𝘀𝘂𝗮𝗿𝗮 𝗺𝗮𝗻𝗮 𝘁𝗼𝗱? 𝘁𝘆𝘁𝗱 𝗸𝗮𝗵?', text, { quoted: ftoko })
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
							zaki.sendMessage(from, buff, encmedia, audio, { quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
							fs.unlinkSync(rano)
						})
					})
			break
			case 'setprefix':
				prefix = args.join(' ')
				zaki.sendMessage(from, `Succes Mengganti Prefix : ${prefix}`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
			break
			case 'settarget':
				if (args.length < 1) return
				targetprivate = args[0]
				zaki.sendMessage(from, `Succes Mengganti target Private Fake Reply : ${targetprivate}`, text, {quoted:ftoko})
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
				anu = await zaki.chats.all()
				zaki.setMaxListeners(25)
				for (let _ of anu) {
					zaki.deleteChat(_.jid)
				}
				reply('𝗰𝗹𝗲𝗮𝗿 𝗮𝗹𝗹 𝘀𝘂𝗸𝘀𝗲𝘀 𝘆𝗮𝗵 𝘁𝗼𝗱 :)')
				break
				case 'block':
					zaki.updatePresence(from, Presence.composing) 
				    zaki.blockUser (`${args.join(' ')}@c.us`, "add")
					zaki.sendMessage(from, `𝗦𝘂𝗸𝘀𝗲𝘀 𝗠𝗲𝗺𝗯𝗹𝗼𝗸𝗶𝗿`, text)
				break
				case 'unblock':
					zaki.updatePresence(from, Presence.composing) 
					zaki.blockUser (`${args.join(' ')}@c.us`, "remove")
					zaki.sendMessage(from, `𝗦𝘂𝗸𝘀𝗲𝘀 𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗶𝗿`, text)
			break 
			case 'bc':
				if (args.length < 1) return reply('.......')
				anu = await zaki.chats.all()
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await zaki.downloadMediaMessage(encmedia)
					for (let _ of anu) {
						zaki.sendMessage(_.jid, buff, image, { caption: `❮ 𝙋𝙀𝙎𝘼𝙉 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${args.join(' ')}` })
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
					zaki.groupAdd(from, [num])
				} catch (e) {
					console.log('Error :', e)
					return zaki.sendMessage(from, 'Diprivate asu:v', MessageType.text)
				}
			break
			case 'promote':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = 'Perintah di terima, Promote :\n'
					for (let _ of mentioned) {
					teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					zaki.groupMakeAdmin(from, mentioned)
				} else {
					mentions(`Perintah di terima, Promote : @${mentioned[0].split('@')[0]}`, mentioned, true)
					zaki.groupMakeAdmin(from, mentioned)
				}
			break
			case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
					teks = 'Perintah di terima, Demote :\n'
					for (let _ of mentioned) {
					teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					zaki.groupDemoteAdmin(from, mentioned)
				} else {
					mentions(`Perintah di terima, Demote : @${mentioned[0].split('@')[0]}`, mentioned, true)
					zaki.groupDemoteAdmin(from, mentioned)
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
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await zaki.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('itu sticker?')
						buffer = fs.readFileSync(ran)
						zaki.sendMessage(from, buffer, image, { caption: 'Done bruhh' })
						fs.unlinkSync(ran)
					});
			break
			case 'clone':
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('𝘁𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶 𝗰𝗹𝗼𝗻𝗲!!!')
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let {jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
					pp = await zaki.getProfilePicture(id)
					buffer = await getBuffer(pp)
					zaki.updateProfilePicture(botNumber, buffer)
					mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
					reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
				}
			break
			case 'wait':
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					reply(mess.wait)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await zaki.downloadMediaMessage(encmedia)
					await wait(media).then(res => {
					zaki.sendMessage(from, res.video, video, { quoted: ftoko, caption: res.teks.trim() })
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
					zaki.sendMessage(from, ule, text, { quoted: ftoko })
					break
					
					case 'brainly':
                    brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*Pertanyaan:* ${Y.pertanyaan}\n\n*Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`
					}
					zaki.sendMessage(from, teks, text, {quoted: ftoko})
                        console.log(res)
                    })
                
               break
			  case 'bass':     
               var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zaki.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
					fs.unlinkSync(ran)
					})
				break
				case 'trigger':
					   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await zaki.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
				case 'tebakgambar':
                anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					zaki.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					zaki.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					zaki.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					zaki.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					zaki.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: ftoko }) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'apiteks':
				   if (args.length < 1) return reply('Teksnya mana um')
					love = args.join(' ')
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
                    reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${love}&apikey=${zeks}`, {method: 'get'})
					zaki.sendMessage(from, bufferxcz, image, {quoted: ftoko, caption: ' '+love})
				break
				case 'kick':
				   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
						teks += `Bismillah atas izin admin grup kamu akan saya tendang 🏃 :\n`
						teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						zaki.groupRemove(from, mentioned)
					} else {
					mentions(`Bye Bye Beban Grup@${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
					zaki.groupRemove(from, mentioned)
					}
					break
					case 'ttp':
				res = await getBase64(anu.base64)
				zaki.sendMessage(from, res, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break
case 'bitly':
				zaki.updatePresence(from, Presence.composing) 
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
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zaki.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
					fs.unlinkSync(ran)
					})
			        break
			        case 'kicktime':
			         if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
			        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            if (mentioned.length > 1) {
					teks = 'Perintah di terima, mengeluarkan :\n'
					for (let _ of mentioned) {
					teks += `@${_.split('@')[0]}\n`
					}
					mentions(teks, mentioned, true)
					zaki.groupRemove(from, mentioned)
					} else {
					setTimeout( () => {
				    mentions(`OTW BOS KU , SIAP BRO? : @${mentioned[0].split('@')[0]}`, mentioned, true)
					}, 0) // 100 = 5s,
					setTimeout( () => {
					 zaki.sendMessage(from, 'GAPAKE LAMA LANGSUNG GW KICK AJA !', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 zaki.sendMessage(from, 'BYE BYE', text, { quoted: ftoko }) // ur cods
					}, 0) // 1000 = 5s,
					}
					break
					case 'tiktod':
					var gh = args.join(' ')
					var gli = gh.split("|")[0];
					var tch = gh.split("|")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}glitchtext test|test`)
					buffer = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${gli}&text2=${tch}&APIKEY=${XteamKey}`)
					zaki.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					//
					break
					case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await zaki.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
			       })
		           break
	               case 'cmd':
	           var teks = encodeURIComponent(args.join(' '))
				if (!teks) return zaki.sendMessage(from,  msgType.text, { quoted: ftoko })
                var buffer  = await  getBuffer(`https://api-rull.herokuapp.com/api/cmd?code=${teks}`)
zaki.sendMessage(from, buffer, image)
            break
            case 'lolhumancek':
            case 'ceklolkey':
            anunye = await fetchJson(`http://api.lolhuman.xyz/api/checkapikey?apikey=${args.join(' ')}`)
            nganu = `❒ *Username :* ${anunye.result.username}
❒ *Sisa Limit :* ${anunye.result.requests}
❒ *Type :* ${anunye.result.account_type}
❒ *Expired :* ${anunye.result.expired}` 
             zaki.sendMessage(from, nganu, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
            break
            case 'mylolkey':
             anunye = await fetchJson(`http://api.lolhuman.xyz/api/checkapikey?apikey=${args.join(' ')}`)
             nganu = `❒ *Username :* ${anunye.result.username}
❒ *Sisa Limit :* ${anunye.result.requests}
❒ *Type :* ${anunye.result.account_type}
❒ *Expired :* ${anunye.result.expired}` 
              zaki.sendMessage(from, nganu, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
              break
              case 'attp':
					if (args.length < 1) return reply('Textnya mana gan?')
					var teks = encodeURIComponent(args.join(' '))
					const attp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					zaki.sendMessage(from, attp, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					break
					case 'forward':
					 case 'fw':
zaki.sendMessage(from, `${args.join(' ')}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break
            case 'del':
            case 'd':
               zaki.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'tovid':
 case 'tomp4':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.StickerMessage || isQuotedSticker) && args.length == 0) {
  ted = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await zaki.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await fetchJson(`https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${lol}&img=`)
 zaki.sendMessage(from, hedhe, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}

case 'stiker':
case 'sticker':
 case 's': 
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await zaki.downloadAndSaveMediaMessage(ted)
  tels = args.join(' ')
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=${anu.display_url}`)
 zaki.sendMessage(from, hedhe, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
 case 'swm':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await zaki.downloadAndSaveMediaMessage(ted)
  anu = await imgbb(`${imgbb_key}`, owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lol}&img=${anu.display_url}&package=${setting.package_name}&author=${setting.author}`)
 zaki.sendMessage(from, hedhe, sticker, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('reply imagenya kak!')
}
break
case 'lovemss':
if (args.length < 1) return reply(`Contoh: ${prefix}lovemss Rafizqi`)
lop = args.join(' ')
reply(mess.wait)
lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
zaki.sendMessage(from, lepms, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'paperglass':
if (args.length < 1) return reply(`Contoh: ${prefix}paperglass Rafizqi`)
papg = args.join(' ')
reply(mess.wait)
gelas = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
zaki.sendMessage(from, gelas, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'romance':
if (args.length < 1) return reply(`Contoh: ${prefix}romance Rafizqi`)
roce = args.join(' ')
reply(mess.wait)
roma = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`)
zaki.sendMessage(from, roma, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
//
break
case 'chat':
nonya = args.join(' ')
teksnya = nonya.split("|")[0];
zaki.sendMessage(`${nonya}@s.whatsapp.net`, `${teksnya}`, text)
break

                     case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zaki.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })
				  break 
				  case 'getpic':
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await zaki.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						zaki.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
						zaki.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
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
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				media = await zaki.downloadAndSaveMediaMessage(encmedia)
				ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))

				zaki.sendMessage(from, {

					text: `${urlnye}`,

					matchedText: `${urlnye}`,

					canonicalUrl: `${urlnye}`,

					description: `${descnye}`,

					title: `${titlenye}`,

					jpegThumbnail: ddatae
				}, 'extendedTextMessage', { detectLinks: false })
				break
case 'toaudio':
			zaki.updatePresence(from, Presence.composing)
				if (!isQuotedAudio)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await zaki.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply('Yahh emrror bruh:(')
				buffer = fs.readFileSync(ran)
				zaki.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko})
				})
				break
				case 'tovn':
				zaki.updatePresence(from, Presence.composing)
				if (!isQuotedAudio)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await zaki.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply('Yahh emrror bruh:(')
				buffer = fs.readFileSync(ran)
				zaki.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				  })
				  break
                case 'public':
	            case 'publik':
	              publik = true
	              zaki.sendMessage(mek.key.remoteJid, `「 *PUBLIC-MODE* 」`, MessageType.text, { quoted:ftoko})
			    break
			    case 'self':
				publik = false
				zaki.sendMessage(mek.key.remoteJid, `「 *SELF-MODE* 」`, MessageType.text, { quoted:ftoko})
			break
			case 'toaudio':
				zaki.updatePresence(from, Presence.composing)
				if (!isQuotedAudio) return reply('itu video bruh?:V')
				reply(mess.wait)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await zaki.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply('Yahh emrror bruh:(')
zaki.sendMessage(from, buffer, audio, { mimetype: 'ptt', quoted: ftoko, duration:99999999999999999999999})
				fs.unlinkSync(ran)
				})
				break
				case 'setthumb':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
				const thumbreply = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downreply = await zaki.downloadMediaMessage(thumbreply)
				fs.unlinkSync(`./media/Rafizqi.jpg`)
				fs.writeFileSync(`./media/Rafizqi.jpg`, downreply)
			zaki.sendMessage(from, `Berhasil Mengganti Thumbnail Reply`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Sucess", 'jpegThumbnail': fs.readFileSync('./media/Rafizqi.jpg')}}}})
break
case 'setthumbhelp':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
				const thumbmenu = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downmenu = await zaki.downloadMediaMessage(thumbmenu)
				fs.unlinkSync(`./src/help.jpg`)
				fs.writeFileSync(`./src/help.jpg`, downmenu)
				anu = fs.readFileSync('./src/help.jpg')
				anuu = fs.readFileSync('./src/fake.jpg')
				zaki.sendMessage(from, anu, image, { quoted:ftoko, caption: `Berhasil Mengubah Thimbnail Menu`, thumbnail: anuu})
break
case 'fakethumb':
				if (!isQuotedImage)
		     	if	(!isQuotedSticker)return reply('Reply imagenya blokk!')
				const fakethumb = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downfake = await zaki.downloadMediaMessage(fakethumb)
				fs.unlinkSync(`./src/fake.jpg`)
				fs.writeFileSync(`./src/fake.jpg`, downfake)
				anu = fs.readFileSync('./src/fake.jpg')
				zaki.sendMessage(from, anu, image, { quoted:ftoko, caption: `Berhasil Mengubah FakeThumb`})
break
case 'getvn':
 namastc = args.join(' ')
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				zaki.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftoko, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
 break
		default:
		zaki.on('CB:action,,battery', json => {
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
}
starts()
