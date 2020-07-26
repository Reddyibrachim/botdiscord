const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NzMyMTA0ODc0OTU5MDQ0NjA4.XxPx-g.EwhwQmBSLScLgTPgPu9BRBkJY0U';
const fs = require("fs");

//Global Settings
const prefix = '>';

//IPSERVER
var baris1 = "**~BUS NUSANTARA~**";
var baris2 = "> **Server IP 1: ``bus1.nusantararp.com:30121``**";
var baris3 = "> **Server IP 2: ``bus2.nusantararp.com:30121``**";
var baris4 = "> **Teamspeak 3: ``ts3.nusantararp.com:9027``**";
var baris5 = "**#HAPPY ROLEPLAY**";

//SUIT
var hasil = ["GUNTING", "BATU", "KERTAS"];
var throwHasil = hasil[Math.floor(Math.random() * hasil.length)];

bot.on('ready', () => {
   console.log('THE PUNISHER SUMMONED')
});

bot.login(process.env.BOT_TOKEN);

//Listening
bot.on("message", function(message) {
console.log(message.author.username + ` (From ` + message.guild.name + `): ` + message.content);
});

//Replying
bot.on("message", function(message) {
	//SUIT
	if (message.content === prefix + 'SUIT') {
		message.channel.send(`**HASIL:** \n${throwHasil} \n${message.author}`);
	} else if (message.content === prefix + 'Suit') {
		message.channel.send(`**HASIL:** \n${throwHasil} \n${message.author}`);
	} else if (message.content === prefix + 'suit') {
		message.channel.send(`**HASIL:** \n${throwHasil} \n${message.author}`);
	//IPNSRP
	} else if (message.content === prefix + 'IPNSRP') {
		message.channel.send(`${baris1} \n${baris2} \n${baris3} \n${baris4} \n${baris5}`);
	} else if (message.content === prefix + 'IPnsrp') {
		message.channel.send(`${baris1} \n${baris2} \n${baris3} \n${baris4} \n${baris5}`);
	} else if (message.content === prefix + 'Ipnsrp') {
		message.channel.send(`${baris1} \n${baris2} \n${baris3} \n${baris4} \n${baris5}`);
	} else if (message.content === prefix + 'ipnsrp') {
		message.channel.send(`${baris1} \n${baris2} \n${baris3} \n${baris4} \n${baris5}`);
	}
	
	//status
	bot.user.setActivity(`Nusantara Roleplay Indonesia`, {
		type: "WATCHING",
	});
});

//Satpam Galeri (Merah merah)
bot.on("message", message => {
	if(message.channel.id === '730708344439832656') {
		let chitchat = bot.channels.cache.get('730422578824609853').name
		if(isNaN(message.content)) {
			message.delete()
			message.author.send('Tolong kirim gambarnya aja yah! soalnya itu ' + message.channel.name + ' hanya untuk gambar, bukan untuk teks!! Kalau kamu mau komentar...Di ' + chitchat + ' aja yah')
		}
	}
	
});

//Collector
bot.on('message', message => {
	
	if(message.author.bot) return
	let filter = m => !m.author.bot;
	let collector = new Discord.MessageCollector(message.channel, filter);
	let destination = message.channel; //bot.channels.cache.get('Id');
	if(message.member.hasPermission('ADMINISTRATOR')) //(message.member.roles.has'roleIDHere'))/(message.member.roles.find(role => role.name === 'Admin'))
	if(message.content.toLowerCase() === 'hm') {
		message.delete();
		collector.on('collect', (message, col) => {
			console.log("Collected message: " + message.content);
			if(message.member.hasPermission('ADMINISTRATOR'))
			if(destination) {
				message.delete();
				destination.send(message.content);
				if(message.content === '_ _') {
					console.log('Stopping Collector...');
					collector.stop();
					console.log('Collector Stopped!');
				}
			}
		});
		collector.on('end', collected => {
			console.log("Message Collected: " + collected.size);
		});
	}
});

//WELCOME
	// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome yah! , ${member}`);
});
