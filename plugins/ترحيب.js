const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('The bot is ready!');
});

// حدث عند انضمام عضو جديد إلى المجموعة
client.on('group_join', (notification) => {
    const chatId = notification.id.remote;
    const contactId = notification.recipientIds[0];

    client.getContactById(contactId).then(contact => {
        const welcomeMessage = `مرحبًا ${contact.pushname} في المجموعة!`;
        client.sendMessage(chatId, welcomeMessage);
    });
});

client.initialize();
