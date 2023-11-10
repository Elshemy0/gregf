const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
    intents: [131071],
    checkUpdate: false
})

client.on("ready", async () => {
    console.log("Ready Made by Elshemy")
    client.user.setHypeSquad(1)
    
})
let prefix = "!"
let id = "629721249551089703"
client.on("messageCreate", async msg => {
    if (msg.content.startsWith(prefix + "join")) {
        if (msg.author.id === client.user.id) return; // التحقق من أن المرسل ليس البوت نفسه
        if (!id.includes(msg.author.id)) return; // التحقق من أن المرسل يحمل الـ ID المطلوب

        let link = msg.content.split(" ").slice(1).join(" "); // استخدام join للحصول على النص بشكل صحيح

        client.acceptInvite(link).then(() => {
            msg.reply({ content: "Done!" }).catch(err => {
                console.error(err);
            });
        }).catch(err => {
            console.error(err);
            msg.reply({ content: "Error accepting invite." }).catch(err => {
                console.error(err);
            });
        });
    }
});



let spamInterval;

client.on("messageCreate", async msg => {
    if (msg.content.startsWith(prefix + "spam")) {
        if (msg.author.id === client.user.id) return;
        if (!id.includes(msg.author.id)) return;

        let m = msg.content.split(" ").slice(1).join(" ");

        if (m && !spamInterval) {
            spamInterval = setInterval(() => {
                msg.channel.send({ content: m });
            }, 500);

        }
    }

    if (msg.content.startsWith(prefix + 'stop')) {
        if (spamInterval) {
            clearInterval(spamInterval);
            spamInterval = null;
            msg.channel.send({ content: "Stopped spamming." });
        }
    }
});



client.login("MTE3MjI3MzI4MjUyMzg2MTA0Nw.GaDgoQ.Ha_pxcwJwfk7Bzkq2mEaTOS2TfeyBDbYcTafUU")