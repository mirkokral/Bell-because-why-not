const NBS = require('nbs.js');
params = ["]music", "play", "NyanCat.nbs"]
var mySong = NBS.loadSong(`./music/${params[2]}`);
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
            songCommands[xe].push(`playsound minecraft:block.note_block.${instrumentNames[element.instrument]} master @a ~ ~1 ~ 9999999999999999999999999999 ${element.pitch}`)
        }
    }
})
console.log(songCommands)