const { joinVoiceChannel, createAudioPlayer, createAudioResource, getVoiceConnection } = require('@discordjs/voice');
const radyo = {
    alem    : "http://scturkmedya.radyotvonline.com/stream/80/",
    cnnturk : "https://radiomap.eu/tr/play/cnn-turk",
    fenomen : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio",
    kral    : "http://46.20.3.204/",
    kralpop : "http://46.20.3.201/",
    line    : "http://radioline.fm:8000/",
    JoyFm    : "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_FM.mp3",
    fenomenturk : "https://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio ",
    show:   "http://46.20.3.229/",
    taksimclup: "http://cast1.taksim.fm:8016",
    eksen: "https://radioeksen.com/",
    acik: "https://acikradyo.com.tr/",
    superfm: "https://20133.live.streamtheworld.com/SUPER_FM_SC?/",
    slowturk: "https://radyo.duhnet.tv/ak_dtvh_slowturk?/",
    efkar: "https://playerservices.streamtheworld.com/api/livestream-redirect/SC008_SO1_SC?/"

}

exports.run = async(client, message, args) => {

    if (!message.member.voice.channel) return message.reply("<:hayir2:1034206492439625848> **Bir Ses Kanalına Katılır Mısın ?**")
    if(!args[0]) return message.reply(`<:hayir2:1034206492439625848> **Bir Seçenek Belirtir Misin ?**
<:hayir2:1034206492439625848> **Radio Komutları :** ***alem, cnnturk, fenomen, kral, kralpop, line, joyfm, fenomenturk, show, taksimclup, eksen, açık, süperfm, slowturk, efkar*** **Örnek :** \`h-radyo kralpop\` **Gibi**`)
let channel = message.member.voice.channel;
const connection = joinVoiceChannel({
   channelId: channel.id,
   guildId: channel.guild.id,
   adapterCreator: channel.guild.voiceAdapterCreator,
   selfDeaf: false
})
    if(args[0] === "alem") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.alem)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("AlemFM Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "cnnturk") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.cnnturk)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("CnnTurk Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "fenomen") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.fenomen)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("FenomenFM Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "kral") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.kral)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("KralFM Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "kralpop") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.kralpop)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("KralPOP Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "line") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.line)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("LineFM Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "joyfm") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.JoyFm)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("JoyFM Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "fenomenturk") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.fenomenturk)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("FenomenTürk Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "show") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.show)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("Show Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "taksimclup") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.taksimclup)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("TaksimClup Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "eksen") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.eksen)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("EksenFM Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "açık") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.acikradyo)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("AçıkFM Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "süperfm") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.superfm)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("SüperFM Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "slowturk") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.slowturk)

    await player.play(resource);
    connection.subscribe(player);
    message.reply("SlowTÜrk Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "efkar") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.efkar)
    await player.play(resource);
    connection.subscribe(player);
    message.reply("EfkarFM Çalıyor <:HadinMikrofon:1023861053731377194>")
    } else if(args[0] === "bitir") {
        getVoiceConnection(`${message.guild.id}`).disconnect();
        message.reply("Başarılı! Ses kanalından ayrıldım")
    } else {
        return message.reply(`<:HadinSunucuSays:1023861068210126888> **Bir Seçenek Belirtir Misin ?**
<:HadinMikrofon:1023861053731377194> **Radio Komutları :** ***alem, cnnturk, fenomen, kral, kralpop, line, joyfm, fenomenturk, show, taksimclup, eksen, açık, süperfm, slowturk, efkar*** **Örnek :** \`h-radyo kralpop\` **Gibi**`)
    }
}

exports.conf = {
    aliases: ['radio']
}

exports.help = {
    name: "radyo"
}