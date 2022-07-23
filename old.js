function main() {
	app = express()
	app.use('/dashboard', express.static('dashboard'))
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	botNames = []
	isCloopEnabled = false
	// Get document, or throw exception on error


	
	// setTimeout(() => botNames.push(new CloopBot(-7, 0)), 3000);
	// setTimeout(() => botNames.push(new CloopBot(0, -7)), 3100);
	// setTimeout(() => botNames.push(new CloopBot(-8, 0)), 3200);
	// setTimeout(() => botNames.push(new CloopBot(0, 8)), 3300);
	// setTimeout(() => botNames.push(new CloopBot(8, 0)), 3400);

	function log(logName, log, name) {
		core(`bcraw ${name ? name : '&6☄ comet'}&7 ${logName}&r » ${log}`)
	}
	blacklist = ""
	banned = []
	intervals = []
	validatedNames = []
	cloopIntervalObject = setInterval(() => { }, 0)

	client.on('connect', (stream) => console.log(require('node:util').inspect(stream)))

	// async function cloopcore(cmd, targetbot, xmod, zmod) {
	// 	try {
	// 		if (targetbot.blockAt(vec3(6942070 + xmod, 100, 6942069 + zmod)) == null) { await targetbot.chat(`/tp ${6942070+xmod} 101 ${6942069+zmod} `); await bot.waitForTicks(2); await targetbot.chat(`/setblock ${6942070 + xmod} 100 ${6942069 + zmod} command_block`); return }
	// 		if (!/command_block/.test(bot.blockAt(vec3(6942069, 100, 6942069)).name)) { await targetbot.chat(`/setblock ${6942070 + xmod} 100 ${6942069 + zmod} command_block`); return }
	// 		targetbot.setCommandBlock(vec3(6942070 + xmod, 100, 6942069 + zmod), cmd, { alwaysActive: true, mode: 1 })
	// 	} catch (error) {
	//     }
	// }
	players = {}
	function fetchEntity(id) {
		return new Entity(id)
	}
	function createBot(options) {
		asdasdbot = mineflayer.createBot(options)
		asdasdbot.on('login', () => {
			asdasdbot.write('chat', { message: `/tp ${corePos[0]} ${corePos[1]} ${corePos[2]}` })
		})
		botNames.push(asdasdbot)
		return asdasdbot
	}
	app.post('/cmd', (req, res) => {
		cmd = req.body.command ? req.body.command : '/bcraw someone cant use comet crosscommunication bruh'
		core(cmd)
		res.send('ok')
	})
	app.post('/console', (req, res) => {
		res.send('ok')
		isRunned = false
		username = req.body.username ? req.body.username : "Console"
		msg = req.body.message ? req.body.message : "]cb bcraw &cA comet crosscommunication error bruh"
		prefixes.forEach((elem) => {
			a = msg.slice(0, -(msg.length - elem.length))
			if (a == elem) {
				isRunned = true
				params = msg.slice(elem.length, msg.length).split(' ')
				CommandList.forEach((elem) => {
					if (params[0] == elem.cName) {
						elem.code(params, username)
					}
				})
			}
		})
		if (!isRunned) {
			log('console', msg)
		}
	})

	setTimeout(() => {

	}, 100);
	gmallDisabled = {}
	CommandList.push(new Command("help", (params, username) => {
		tellrawA = [
			{ text: '☄ comet', color: 'gold' },
			{ text: ` ${config.version}\n\n`, color: "gray" },
			{ text: 'cmds: \n', color: 'white' },
		]
		CommandList.forEach((elem) => {
			tellrawA.push({ text: elem.cName, color: elem.isTrusted ? "red" : "green", hoverEvent: { action: "show_text", contents: [elem.desc ? elem.desc : { text: 'This command was not documented.', color: 'red' }] } })
			tellrawA.push({ text: ", ", color: "white" })
		})
		core(`tellraw @a ${JSON.stringify(tellrawA)}`)
	}, false, { text: "Shows a list of commands." }))
	cloopInterval = 20
	CommandList.push(new Command('restart', (params) => {
		process.exit()
	}, true, { text: "Restarts/stops the bot depending if using systemd service or manually started." }))
	CommandList.push(new Command('broadcast', (params, username) => {
		params.shift()
		str = params.join(' ')
		log(username, str, '&2Broadcast&r')
	}, false, { text: "Broadcasts a message between specified servers.\nUsage: ]broadcast <message>" }))
	CommandList.push(new Command('diceroll', () => {
		dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
		log('dice', dices[Math.floor(Math.random() * dices.length)])
	}, false, { text: 'Rolls a dice.' }))
	CommandList.push(new Command('validate', (params,username) => {
		if(!validatedNames.includes(username)){
			validatedNames.push(username)
			log('verification', `&2Now, ${username} must not provide a hash for trusted commands.`)
		}
	},true, {text: "Validate your name."}))
	CommandList.push(new Command('unvalidate', (params,username) => {
		if(validatedNames.includes(username)){
			validatedNames.splice(validatedNames.indexOf('username'), 1);
			log('verification', `&2Now, ${username} must provide a hash for trusted commands.`)
		}
	},true, {text: "Unalidate your name."}))
	
	CommandList.push(new Command('rainbowify', (params, username) => {
		params.shift()
		string = params.join(' ')
		gradientArray = new Gradient()
			.setColorGradient("#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000")
			.setMidpoint(string.length)
			.getColors();
		astring = string.split('')
		objs = []
		for (let index = 0; index < astring.length; index++) {
			element = astring[index];
			objs.push({ text: astring[index], color: gradientArray[index] })
		}
		core(`tellraw @a ${JSON.stringify(objs)}`)

	}, false, { text: "Rainbowifies a string, does not work with proxies and < 1.15." }))

	CommandList.push(new Command('lagClients', (params, username) => {
		a = ""
		for (let index = 0; index < parseInt(params[2]); index++) {
			a += String.fromCharCode(Math.floor(Math.random() * 0xFFFF));
		}
		core(`bcraw &k${a}`)
		setTimeout(() => core(`title @a title {"text":"${JSON.stringify(a)}","obfuscated":true}`), 100)
		setTimeout(() => core(`title @a subtitle {"text":"${JSON.stringify(a)}","obfuscated":true}`), 200)
		setTimeout(() => core(`title @a actionbar {"text":"${JSON.stringify(a)}","obfuscated":true}`), 300)
	}, true, { text: "Lags clients using text." }))
	CommandList.push(new Command('list', () => {
		log('players', Object.keys(players).join(', '))
	}, false, { text: "Lists players." }))
	CommandList.push(new Command('echo', (params) => {
		params.shift()
		client.write('chat', { message: params.join(' ') })
	}, false))
	CommandList.push(new Command('cb', (params) => {
		params.shift()
		core(params.join(' '))
	}, false, { text: "Runs a command in a command block." }))
	CommandList.push(new Command('megasudo', (params) => {
		params.shift()
		username = params.shift()
		cmd = params.join(' ')
		for (let index = 0; index < 10; index++) {
			setTimeout(() => {
				core(`sudo ${username} ${cmd}`)
			}, 100 * index);

		}
	}, false, "Sudoes someone 10 times."))
	CommandList.push(new Command('killall', (params, username) => {
		index = 0
		Object.keys(players).forEach(e => {
			if (e != client.username || e != username) {
				index += 1
				setTimeout(() => core(`ekill ${e}`), 100 * index)
			}
		})
	}, true, { text: "Kills all players" }))
	CommandList.push(new Command('gamemodeall', (params) => {
		log('gmall', `&2Making everyone ${params[1]}`)
		for (let index = 0; index < Object.keys(players).length; index++) {
			const element = players[Object.keys(players)[index]].name;
			setTimeout(() => {
				if (element != client.username) {
					core(`gamemode ${params[1]} "${element}"`)
				}
			}, 200 + 100 * index);

		}
	}, false, { text: "Sets gamemode for all players.\nUsage: ]gamemodeall <gamemode>" }))
	CommandList.push(new Command('ayunsudo', (params, username) => {
		string = params
		string.shift()
		string.shift()
		stringReal = string.join(' ')
		log('ayunsudo', `Trying to make everyone run ${stringReal}`)
		for (let index = 0; index < Object.keys(players).length; index++) {
			const element = Object.keys(players)[index];
			try {
				setTimeout(() => {
					try {
						core(`sudo ${players[element].name.split(" ")[0]} ${stringReal}`)
					} catch (error) { }
				}, 100 * index)
			} catch (erro) { }
		}
	}, true, { text: "Sudoes everyone on ayunboom." }))
	CommandList.push(new Command('cloop', async (params, username) => {
		if (params[2] == 'on') {
			isCloopEnabled == true
			for (let index = 0; index < botNames.length; index++) {
				const element = botNames[index];
				intervals.push(
					setInterval(() => {
						ccore(cloopCommand, element._client, element.offx, element.offz)
					}, cloopInterval * 50)
				)
			}
			log('cloop', '&aEnabled')
		} else if (params[2] == 'off') {
			isCloopEnabled == false
			intervals.forEach((elem) => clearInterval(elem))
			log('cloop', '&cDisabled')
		} else if (params[2] == 'set') {
			a = [...params]
			a.shift()
			a.shift()
			a.shift()
			a.shift()
			cloopInterval = params[3]
			// ]cloop aa3f0fbc4c291a76f8a1e477b5a695ba set bcraw &aUse &b/d&a to &ldisguise&r&a and &b/u&a to &lundisguise
			str = a.join(" ")
			cloopCommand = str
			log('cloop', `&aSet new command to ${str} with interval of ${params[3]}`)
		}
	}, true, { text: "Loops commands in command blocks, works like a bunch of repeating command blocks." }))
	CommandList.push(new Command('refillcore', () => {
		client.write('chat', { message: `/fill ${corePos[0] - 9} ${corePos[1]} ${corePos[2] - 9} ${corePos[0] + 9} ${corePos[1] - 50} ${corePos[2] + 9} minecraft:command_block{"CustomName":'["",{"text":"☄ comet","color":"gold"},{"text":" core","color":"gray"}]'}` })
		setTimeout(() => {
			log('core', '&aCore refilled, this message also tests the core.')
		}, 200);
	}, false, { text: "Refills the core." }))
	CommandList.push(new Command('bf', async (params, username) => {
		if (params[1] && params[2]) {
			log('bf log', `Executing ${params[1]} with input ${params[2]}`)
			try {
				output = await bf.execute(params[1].toString(), params[2].toString())
				setTimeout(() => log('bf output', output.output), 100)
			} catch (error) {
				log('bf error', "&cError happened while running code.")
				console.log(error)
			}
		} else {
			log('bf error', "&cNot enougth args")
		}
	}, false, { text: "Execute brainf*** code.\nUsage: ]bf <code> <input>" }))
	CommandList.push(new Command("signedtitle", (params, username) => {
		core(`title @a subtitle "- ${username}"`)
		params.shift()
		setTimeout(() => {
			try {
				core(`title @a title ${JSON.stringify(JSON.parse(params.join(' ')))}`)
			} catch (error) {
				log('command error', error.toString())
			}
		}, 200);
	}, false))
	CommandList.push(new Command("cowsay", (params) => {
		params.shift()
		core(`bcraw ${cowsay.say({ text: params.join(" ") }).split('').map(s => '&r' + s).join('')}`)
	}, false, { text: "Makes a cow say things." }))
	CommandList.push(new Command("ai", (params, username) => {
		params.shift()
		message = params.join(' ')
		// https://api.affiliateplus.xyz/api/chatbot?message=Hello!&name=BOT_NAME&user=1
		fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${message}&name=COMET&user=${username}&master=mirkokral&location=you`).then(res => res.json()).then((json) => { log('ai', json.message) })
	}, false, { text: "Talk with an AI." }))
	CommandList.push(new Command("eval", (params, username) => {
		phase0str = [ ... params]
		phase0str.shift()
		phase1str = phase0str.join(" ").split('')
		for (let index = 0; index < phase1str.length; index++) {
			const element = phase1str[index];
			if(element == "§"){
				try{
					delete phase1str[index]
					delete phase1str[index+1]
				} catch {
					delete phase1str[index]
				}
			}
			
		}
		string = phase1str.join('')
		log('eval run', `&rRunning ${string}`)
		setTimeout(() => {
			if (evalTimeout <= 0) {
					try {
						log('eval output', `&a${require("node:util").inspect(vm.run(string))}`)
					} catch (error) {
						log('eval error', `&c${error.message}`)
						if (error.toString().startsWith("Error: Script execution timed out after")) { evalTimeout = 1000 }
					}
				} else {
					log('eval timeout', 'Eval was disabled.')
				}
		}, 200)
	}, false, { text: "Runs javascript code in a container." }))
	CommandList.push(new Command('hash', (params, username) => {
		hash = makehash()
		log('log', '&aHash reset :)')
		fs.writeFileSync('hash.txt', hash)
	}, false, { text: "New verification method, secure!!!!!!!!!!!!!!!!" }))
	app.get('/hash', (req, res) => res.send(hash))
	

	bot = {
		chat: (msg) => client.write('chat', { message: msg })
	}

	
}
main()