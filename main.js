
var shiftCharCode = Δ => c => String.fromCharCode(c.charCodeAt(0) + Δ);
var toFullWidth = str => str.replace(/[!-~]/g, shiftCharCode(0xFEE0));
var toHalfWidth = str => str.replace(/[！-～]/g, shiftCharCode(-0xFEE0));
const swears = /\b(kurva|pica|piča|pici|piči|picus|pičus|kokot|kokoti|4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi
const vec3 = require('vec3')
const bfo = require('brainfuck-node');
const bf = new bfo();
let corePos = [492, 255, 145]
const exec = require('child_process').exec;
const mineflayerViewer = require('prismarine-viewer').mineflayer
const { pathfinder, Movements } = require('mineflayer-pathfinder')
const { GoalBlock, GoalNear } = require('mineflayer-pathfinder').goals
const { Docker } = require('node-docker-api')
const docker = new Docker({ socketPath: '/var/run/docker.sock' });
const fs = require('fs');
const { VM } = require('vm2');
const Gradient = require("javascript-color-gradient");
const safeEval = require("safe-eval")
const cowsay = require("cowsay");
const mineflayer = require('mineflayer')
const fetch = require('node-fetch')
const yaml = require('js-yaml');
const { Command } = require('./commands.js')
const prefixes = ['comet ', 'bell ', '@', '🔔', '`', ']']
const config = yaml.load(fs.readFileSync('./config.yml'));
const prompt = require('prompt-sync')()
const { time } = require('console');
const path = require("path")
const util = require('util')
const express = require('express')
const Entity = require('prismarine-entity')('1.17.1') // TODO: update for prismarine-registry
const child_process = require("child_process")
const mcp = require('minecraft-protocol');
const { text } = require('express');
const { instrumentIds } = require('nbs.js');
const vm = new VM({
    allowAsync: false,
    timeout: 20000,
    compiler: "javascript",
    wasm: false,
    eval: false,
    sandbox: { console: undefined, hash: "Nice try!", mf: mineflayer, toHalfWidth: toHalfWidth, toFullWidth: toFullWidth, shiftCharCode: shiftCharCode }
})
swearnums = {}
const admins = ["mirkokral", "Son", "nameAccess", '(fake)]']
class CloopBot {
    constructor(offx, offz) {
        this.offx = offx - 4
        this.offz = offz - 4
        this.initClient()
    }
    initClient() {
        this._client = mcp.createClient({
            username: makeid(16),
            host: config.server,
            port: config.port,
            version: '1.17.1',
            noPongTimeout: 214748314,
            closeTimeout: 214748314,
            checkTimeoutInterval: 214748314
        })
        this._client.on('position', (pos) => {
            if (pos.x == corePos[0] - 4 + this.offx && pos.y == corePos[1] + 1 && pos.z == corePos[2] - 4 + this.offz) { } else { this._client.write('chat', { message: `/tp ${corePos[0] - 4 + this.offx} ${corePos[1] + 1} ${corePos[2] - 4 + this.offz}` }) }
        })
        this._client.on('login', () => {
            setTimeout(() => this._client.write('chat', { message: '/v on' }), 2000)
        })
        this._client.on('end', () => {
            this.initClient()
        })
        this._client.on('disconnect', () => {
            this.initClient()
        })
    }
}

function makeid(length) {
    var result = '';
    for (var i = 0; i < length; i++) {
        result += String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33);
    }
    return result;
}
function makehash() {

    return makeid(8)
}
hashCooldown = 20
evalTimeout = 0
// const asd = null
cloopCommand = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

hash = makehash()
function bot(host, port) {
    function log(logName, log) {
        core(`bcraw &r<&e🔔 bell &r&7${logName}&r> ${log}`)
    }
    players = {}
    var client = mcp.createClient({
        username: makeid(16),
        host: host,
        port: port,
        version: '1.18',
        noPongTimeout: 214748314,
        closeTimeout: 214748314,
        checkTimeoutInterval: 214748314
    })
    filterRegex = /Eggman/igu
    let plugins = []; //NOTE: DO NOT CHANGE, PLUGINS ARE LOADED AUTOMATICALLY
    fs.readdirSync(
        path.join(__dirname, "plugins")
    ).forEach(function (file) { // populate plugins array
        if (file.endsWith(".js")) {
            plugins.push(path.join(__dirname, "plugins", file));
        }
    });
    plugins.forEach(function (plugin) { //load plugins
        let name = plugin.split("/");
        name = name[name.length - 1];
        try {
            let plug = require(plugin);
            plug.inject(client);
            console.log(`[${name}] Injected!`);
        } catch (e) {
            console.log(`[${name}] Exception loading plugin:`);
            console.log(require("util").inspect(e));
        }
    });
    async function core(cmd) {
        try {
            client.write('update_command_block', { location: { x: corePos[0], y: corePos[1], z: corePos[2] }, command: cmd, mode: 1, flags: 0x04 })
        } catch (error) {
            console.log(error)
        }
    }
    async function ccore(cmd, targetbot, offx, offy, depth, mindepth) {
        try {
            a = 50
            b = 0
            if (mindepth) b = mindepth
            if (depth) a = depth - b
            for (let index = 0; index < depth; index++) {
                targetbot.write('update_command_block', { location: { x: corePos[0] + offx, y: corePos[1] - index - b, z: corePos[2] + offy }, command: cmd, mode: 1, flags: 0x04 })
            }
        } catch (error) {
            console.log(error)
        }
    }
    client.on("login", () => {
        setTimeout(() => client.write("chat", { message: "/v on" }), 300)
        setTimeout(() => client.write("chat", { message: "/commandspy on" }), 400)

        setTimeout(() => client.write('chat', { message: `/fill ${corePos[0] - 9} ${corePos[1]} ${corePos[2] - 9} ${corePos[0] + 9} ${corePos[1] - 50} ${corePos[2] + 9} minecraft:command_block{"CustomName":'["",{"text":"🔔 bell","color":"yellow"},{"text":" core","color":"gray"}]'}` }), 1000) // 246
        PrefixText = [{ text: "🔔 bell", color: "yellow" }, { text: " (previously comet) Dev ", color: 'gray' }, { text: "| ", color: 'dark_gray' }]
        setTimeout(() => core("/team add Mirkokral"), 5000)
        setTimeout(() => core(`/team modify Mirkokral prefix ${JSON.stringify(PrefixText)}`), 5100)
        setTimeout(() => core(`/team modify Mirkokral color blue`), 5200)
        setTimeout(() => core(`/team modify Mirkokral deathMessageVisibility never`), 5300)
        setTimeout(() => core(`/team modify Mirkokral collisionRule never`), 5400)
        setTimeout(() => core(`/scoreboard objectives add Health health {"text":"❤","color":"red"}`), 5700)
        setTimeout(() => core(`/scoreboard objectives modify Health rendertype hearts`), 5800)
        setTimeout(() => core(`/scoreboard objectives setdisplay list Health`), 5900)
        setTimeout(() => core(`/sudo mirkokral rank &2&l[&a&lBotDev&2&l]`), 6000)
        setTimeout(() => core(`/sudo DiscordTonyStark rank &2&l[&a&lTonyStark&2&l]`), 6000)
        setTimeout(() => core(`/nick mirkokral &amirko`), 6200)
        setTimeout(() => core(`/team join Mirkokral mirkokral`), 3200)
        setTimeout(() => core(`/team join Mirkokral DiscordTonyStark`), 6400)
        setTimeout(() => core(`/title @a times 0 50 10`), 6500)
        setTimeout(() => core(`/sudo DiscordTonyStark nick &aDiscordTonyStark`), 6500)
        setTimeout(() => {
            setTimeout(() => core('/title @a reset'), 100)
            setTimeout(() => core('/title @a times 0 60 0'), 100)
            anim = [
                [{ text: "🔔", color: 'yellow' }, "minecraft:ui.button.click", 2],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔", color: 'yellow' }, "none", 0],
                [{ text: "🔔 ", color: 'yellow' }, "none", 2],
                [{ text: "🔔 B", color: 'yellow' }, "minecraft:ui.button.click", 1],
                [{ text: "🔔 B", color: 'yellow' }, "none", 1],
                [{ text: "🔔 Be", color: 'yellow' }, "minecraft:ui.button.click", 1],
                [{ text: "🔔 Be", color: 'yellow' }, "none", 1],
                [{ text: "🔔 Bel", color: 'yellow' }, "minecraft:ui.button.click", 1],
                [{ text: "🔔 Bel", color: 'yellow' }, "none", 1],
                [{ text: "🔔 Bell", color: 'yellow' }, "minecraft:block.bell.use", 0.5],
            ]
            setTimeout(() => {
                for (let index = 0; index < anim.length; index++) {
                    const e = anim[index];
                    setTimeout(() => {
                        core(`/title @a title ${JSON.stringify(e[0])}`)
                        ccore(`playsound ${e[1]} master @a ~ ~1 ~ 999999999999999999 ${e[2] ? e[2] : 2}`, client, 0, 0, 7, 1)
                    }, 100 * index)
                }
            }, 300);
        }, 8000)
        var readline = require('readline');
        console.log(client.username)
    })

    CommandList = []
    songTimeouts = []
    gmallDisabled = {}
    isCloopEnabled = true
    validatedNames = []
    botNames = []
    intervals = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
    filters = ["bad bot"]
    if (config.cloopEnabled) {
        if (config.cloopBotAmount <= 30) {
            for (let index = 0; index < config.cloopBotAmount; index++) {
                setTimeout(() => botNames.push(new CloopBot(Math.floor(index / 9), index - (Math.floor(index / 9) * 9))), 10000 + (200 * index));
            }
        }
    }
    CommandList.push(new Command("help", (params, username) => {
        tellrawA = [
            { text: '🔔  bell', color: 'yellow' },
            { text: ` ${config.version}\n\n`, color: "gray" },
            { text: 'cmds: \n', color: 'white' },
        ]
        CommandList.forEach((elem) => {
            tellrawA.push({ text: elem.cName, color: elem.isTrusted ? "red" : "green", hoverEvent: { action: "show_text", contents: [elem.desc ? elem.desc : { text: 'This command was not documented.', color: 'red' }] } })
            tellrawA.push({ text: ", ", color: "white" })
        })
        core(`tellraw @a ${JSON.stringify(tellrawA)}`)
    }, false, { text: "Shows a list of commands." }))
    cloopInterval = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
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
    CommandList.push(new Command('validate', (params, username) => {
        if (!validatedNames.includes(username)) {
            validatedNames.push(username)
            log('verification', `&2Now, ${username} must not provide a hash for trusted commands.`)
        }
    }, true, { text: "Validate your name." }))
    CommandList.push(new Command('botuser', () => {
        log('botuser', `&aThe username is ${client.username.replace('&', "&&r")} and the uuid is ${client.uuid}`)
    }))
    CommandList.push(new Command('unvalidate', (params, username) => {
        if (validatedNames.includes(username)) {
            validatedNames.splice(validatedNames.indexOf('username'), 1);
            log('verification', `&2Now, ${username} must provide a hash for trusted commands.`)
        }
    }, true, { text: "Unalidate your name." }))
    CommandList.push(new Command('music', (params, username) => {
        // log('error', '&cSorry, this command is tottaly broken.')
        phase0str = [...params]
        phase1str = phase0str.join(" ").split('')
        for (let index = 0; index < phase1str.length; index++) {
            const element = phase1str[index];
            if (element == "§") {
                try {
                    delete phase1str[index]
                    delete phase1str[index + 1]
                } catch {
                    delete phase1str[index]
                }
            }

        }
        params = phase1str.join('').split(' ')
        NBS = require('nbs.js')
        if (params[1] == "info") {
            if (fs.existsSync(`./music/${params[2]}`)) {
                if (params[2].endsWith('.nbs')) {
                    try {
                        var mySong = NBS.loadSong(`./music/${params[2]}`);
                        if (mySong == undefined) {
                            log('music error', '&cAn error occured: invalid song.')
                        } else {
                            infoText = { text: `Title: ${mySong.title}\nAuthor: ${mySong.author}\nCompatible with Bell: ${Object.keys(mySong.layers).length > 30 ? "No" : "Yes"}`, color: "blue" }
                            core(`tellraw @a ${JSON.stringify(infoText)}`)
                        }
                    } catch (error) {
                        log('music error', '&cAn error occured.')
                        console.log(error)
                    }
                } else {
                    log('music', '&cSong is not in note block format.')
                }
            } else {
                log('music', `&cSong at ./music/${params[2]} does not exist.`)
            }
        } else if (params[1] == "play") {
            if (fs.existsSync(`./music/${params[2]}`)) {
                if (params[2].endsWith('.nbs')) {
                    try {
                        var mySong = NBS.loadSong(`./music/${params[2]}`);
                        if (mySong == undefined) {
                            log('music error', '&cAn error occured: invalid song.')
                        } else {
                            instrumentNames = ["harp", "bass", "basedrum", "snare", "hat", "guitar", "flute", "bell", "chime", "xylophone", "iron_xylophone", "cow_bell", "didgeridoo", "bit", "banjo", "pling"]

                            songTicks = []
                            songCommands = []
                            Object.keys(mySong.layers).forEach(xe => {
                                songCommands[xe] = []
                                songTicks[xe] = []
                                Object.keys(mySong.layers[xe].notes).forEach(e => {
                                    songTicks[xe][e] = mySong.layers[1].notes[e]
                                })
                                for (let index = 0; index < songTicks[xe].length; index++) {
                                    const element = songTicks[xe][index];
                                    if (element == undefined) {
                                        songCommands[xe].push('')
                                    } else {
                                        songCommands[xe].push(`playsound minecraft:block.note_block.${instrumentNames[element.instrument]} record @a ~ ~1 ~ 9999999999999999999999999999 ${element.pitch}`)
                                    }
                                }
                            })
                            for (let index = 0; index < songCommands[0].length; index++) {
                                const element = e[index];
                                if (element != "") {
                                    setTimeout(() => ccore(element, client, 0, 0, 1, index + 1), index * 50)
                                }
                            }
                        }
                    } catch (error) {
                        log('music error', '&cAn error occured.')
                        console.log(error)
                    }
                } else {
                    log('music', '&cSong is not in note block format.')
                }
            } else {
                log('music', `&cSong at ./music/${params[2]} does not exist.`)
            }
        } else if (params[1] == "list") {
            tellrawThing = []
            fs.readdirSync('./music/').forEach(e => {
                tellrawThing.push({ text: e, color: 'yellow' })
                tellrawThing.push({ text: ', ', color: 'gold' })
            })
            core(`tellraw @a ${JSON.stringify(tellrawThing)}`)
        }
    }, false, { text: "Play music, this command's usage is not documented, as its still in beta." }))
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

    CommandList.push(new Command('crashServer', (params, username) => {
        a = 'a'.repeat(32761)
        setInterval(
            () => ccore(`bcraw ${a}`, client, 0, 0, 50, 0), 0
        )
        setTimeout(() => core(`title @a title {"text":"${JSON.stringify(a)}","obfuscated":true}`), 100)
        setTimeout(() => core(`title @a subtitle {"text":"${JSON.stringify(a)}","obfuscated":true}`), 200)
        setTimeout(() => core(`title @a actionbar {"text":"${JSON.stringify(a)}","obfuscated":true}`), 300)
    }, true, { text: "Crashes the server instantly and disconnects everyone in ~3 seconds. (REAL)" }))
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
            log('cloop', '&aEnabled')
            for (let index = 0; index < cloopCommand.length; index++) {
                if (config.cloopEnabled) {
                for (let index2 = 0; index2 < botNames.length; index2++) {
                    const element = botNames[index2];
                        intervals[index].push(
                            setInterval(() => {
                                ccore(cloopCommand[index], element._client, element.offx, element.offy, 2, index * 2)
                            }, 50 * cloopInterval[index])
                        )
                    }
                } else {
                    intervals[index].push(
                        setInterval(() => {
                            ccore(cloopCommand[index], client, 1, 0, 2, index * 2)
                            ccore(cloopCommand[index], client, 2, 0, 2, index * 2)
                            ccore(cloopCommand[index], client, 3, 0, 2, index * 2)
                            ccore(cloopCommand[index], client, 4, 0, 2, index * 2)
                            ccore(cloopCommand[index], client, 0, 0, 2, index * 2)
                            ccore(cloopCommand[index], client, -1, 0, 2, index * 2)
                            ccore(cloopCommand[index], client, -2, 0, 2, index * 2)
                            ccore(cloopCommand[index], client, -3, 0, 2, index * 2)
                            ccore(cloopCommand[index], client, -4, 0, 2, index * 2)
                            ccore(cloopCommand[index], client, 0, 1, 2, index * 2)
                            ccore(cloopCommand[index], client, 0, 2, 2, index * 2)
                            ccore(cloopCommand[index], client, 0, 3, 2, index * 2)
                            ccore(cloopCommand[index], client, 0, 4, 2, index * 2)
                            ccore(cloopCommand[index], client, 0, 0, 2, index * 2)
                        }, 50 * cloopInterval[index])
                    )
                }
            }

        } else if (params[2] == 'off') {
            isCloopEnabled == false
            intervals.forEach((elem) => elem.forEach(elem2 => {
                clearInterval(elem2)
            }))
            setTimeout(() => log('cloop', '&cDisabled'), 100)
        } else if (params[2] == 'set') {
            a = [...params]
            a.shift()
            a.shift()
            a.shift()
            a.shift()
            a.shift()
            if(params[4] == "all"){
                str = a.join(" ")
                for (let index = 0; index < cloopInterval.length; index++) {
                    cloopInterval[index] = params[3]
                    cloopCommand[index] = str
                }
                // ]cloop aa3f0fbc4c291a76f8a1e477b5a695ba set bcraw &aUse &b/d&a to &ldisguise&r&a and &b/u&a to &lundisguise
                log('cloop', `&aSet new command to ${str} with interval of ${params[3]} to all id's`)
            } else {
                try {
                    id = parseInt(params[4])
                } catch (error) {
                    id = 7568
                }
                if(id == NaN) id = 7434
                if (id > 19 || id < 0) {
                    log('cloop error', `&cId may not be less than 0 and more than 19, recived ${params[4]}`)
                    return
                }
                cloopInterval[id] = params[3]
                // ]cloop aa3f0fbc4c291a76f8a1e477b5a695ba set bcraw &aUse &b/d&a to &ldisguise&r&a and &b/u&a to &lundisguise
                str = a.join(" ")
                cloopCommand[id] = str
                log('cloop', `&aSet new command to ${str} with interval of ${params[3]} and id of ${id}`)
            }
        } else if (params[2] == "clear") {
            for (let index = 0; index < cloopCommand.length; index++) {
                cloopCommand[index] = ""
            }
            log('cloop', '&aCleared!')
        } else if (params[2] == "list") {

            log('cloop', `list: ${JSON.stringify(cloopCommand)}`)
        }
    }, true, { text: "Loops commands in command blocks, works like a bunch of repeating command blocks." }))
    CommandList.push(new Command('refillcore', () => {
        client.write('chat', { message: `/fill ${corePos[0] - 9} ${corePos[1]} ${corePos[2] - 9} ${corePos[0] + 9} ${corePos[1] - 50} ${corePos[2] + 9} minecraft:command_block{"CustomName":'["",{"text":"🔔 bell","color":"yellow"},{"text":" core","color":"gray"}]'}` })
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
        fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${message}&name=bell&user=${username}&master=mirkokral&location=you`).then(res => res.json()).then((json) => { log('ai', json.message) })
    }, false, { text: "Talk with an AI." }))
    CommandList.push(new Command("eval", (params, username) => {
        phase0str = [...params]
        phase0str.shift()
        phase1str = phase0str.join(" ").split('')
        for (let index = 0; index < phase1str.length; index++) {
            const element = phase1str[index];
            if (element == "§") {
                try {
                    delete phase1str[index]
                    delete phase1str[index + 1]
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
    client.on('message', (oldusrname, msg) => {
        phase1str = oldusrname.split('')
        for (let index = 0; index < phase1str.length; index++) {
            const element = phase1str[index];
            if (element == "§") {
                try {
                    delete phase1str[index]
                    delete phase1str[index + 1]
                } catch {
                    delete phase1str[index]
                }
            }

        }
        username = phase1str.join('')
        if (msg == undefined || username == undefined) return
        if (msg.length > 256) return
        console.log(username)
        msg = msg
        phase1str = msg.split('')
        for (let index = 0; index < phase1str.length; index++) {
            const element = phase1str[index];
            if (element == "§") {
                try {
                    delete phase1str[index]
                    delete phase1str[index + 1]
                } catch {
                    delete phase1str[index]
                }
            }
            
        }
        testStr = toHalfWidth(phase1str.join(''))
        ta = testStr.split('\u202E')
        ta1 = ta[0]
        ta2 = ""
        for (let index = 1; index < ta.length; index++) {
            const element = ta[index];
            ta2 += element
        }
        stestingstr = ta1 + reverseString(ta2)
        if(filterRegex.test(stestingstr)){
            core(`execute run deop @p[name="${username}"]`)
            ccore(`mute ${username.split(' ')[0]} 15m Filtered by Bell.`,client,0,0,1,1)
        }
        prefixes.forEach((elem) => {
            a = msg.slice(0, -(msg.length - elem.length))
            if (a == elem) {
                params = msg.slice(elem.length, msg.length).split(' ')
                CommandList.forEach((elem) => {
                    if (params[0] == elem.cName) {
                        try {
                            if (elem.isTrusted) {
                                if (params[1] != hash && !validatedNames.includes(username)) {
                                    log('verification error', '&cBad hash.')
                                    return
                                } else if (validatedNames.includes(username)) {
                                    params.splice(1, 0, hash)
                                    elem.code(params, username)
                                } else {
                                    elem.code(params, username)
                                }
                            } else {
                                elem.code(params, username)
                            }

                        } catch (error) {
                            log('command error', `${error.toString()}`)
                            console.log(error)
                        }
                    }
                })
            }
        })
    })
    bot.chat = msg => { client.write('chat', { message: msg }) }
    client.on('entity_status', (data) => {
        if (data.entityStatus == 24) {
            setTimeout(() => client.write('chat', { message: '/op @s[type=player]' }), 100)
        }
    })
    client.on('parsed_chat', (msg) => {
        if (/bad bot|Anchor bad|ChromeNS bot and Anchor bad ngl/.test(msg.clean)) return
        if (msg.raw.split('§7is §r')[1]){
            players[msg.raw.split('§7is §r')[0]]["realname"] = msg.raw.split('§7is §r')[1]
        }
        if (msg.clean.includes("Current world")) {
            console.log(`a`)
        }
        message = msg.clean
        fs.appendFileSync('./log.txt', msg.clean + '\n')
        if (msg.clean == `Successfully disabled CommandSpy`) {
            bot.chat(`/cspy on`)
        }
        if (msg.clean.includes("Vanish for ") && msg.clean.includes("disabled") && msg.clean.includes(client.username)) {
            bot.chat("/v on");
        }
        if (msg.clean.includes(`You have been muted!`)) {
            bot.chat(`/silence ${client.username}`)
        }
        if (msg.clean.includes(`Your voice has been silenced!`)) {
            bot.chat(`/silence ${client.username}`)
        }
        if (msg.clean.includes(`You do the crime, you do the time.`)) {
            bot.chat(`/jail ${client.username}`);
        }
        if (msg.clean.startsWith("You do not have access to that command.") || message.toString().startsWith("I'm sorry, but you do not have permission to perform this command. Please contact the server administrators if you believe that this is in error.")) {
            bot.chat("/op @s[type=player]");
        }
        if (msg.clean.startsWith("Must be an opped player in")) {
            bot.chat("/op @s[type=player]");
            setTimeout(() => bot.chat('/gamemode creative'), 100)
        }
    })
    client.on('error', (err) => {
        try {
            console.log(err)
            if (err.startsWith('Must be an opped player in creative mode')) {
                client.write('chat', { message: '/op @s[type=player]' })
                setTimeout(() => client.write('chat', { message: '/essentials:gamemode creative' }), 100)
            }
        } catch (e) { }
    })
    client.on('end', (reason) => {
        console.log(reason)
        process.exit(1)
    })
    client.on('disconnect', (reason) => {
        console.log(reason)
        process.exit(1)
    })
    client.on('position', (pos) => {
        if (pos.x != corePos[0] || pos.y != corePos[1] + 1 || pos.z != corePos[2]) { client.write('chat', { message: `/tp ${corePos[0]} ${corePos[1] + 1} ${corePos[2]}` })}
    })
    client.on('player_info', (data) => {
        if (data.action == 0 && data.data[0].name) {
            players[data.data[0].name] = { name: data.data[0].name, uuid: data.data[0].UUID }
            // log('greeting', `&aHi, ${data.data[0].name}!`)
        } else if (data.action == 4) {
            nameOfDisconnectingPlayer = ""
            Object.keys(players).forEach(e => {
                try {
                    if (players[e].uuid == data.data[0].UUID) { delete players[e] }
                } catch (error) {
                    log('core error', error.toString())
                }
            })
        } else if (data.action == 1) {
            Object.keys(players).forEach(e => {
                try {
                    if (players[e].uuid == data.data[0].UUID) {
                        if (players[e].name == client.username && data.data[0].gamemode != 1) {
                            setTimeout(() => client.write('chat', { message: "/minecraft:gamemode creative" }), 100)
                        }
                    }
                } catch (err) {
                    log('core error', error.toString())
                }
            })
        }
    })

}
bot(config.server, config.port)