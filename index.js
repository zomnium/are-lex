
var Botkit = require('Botkit'),
    controller = Botkit.slackbot(),
    bot = controller.spawn({
        token: '[hier token invullen]'
    }),
    doeMaarLastig = 'message_received,ambient,direct_message,direct_mention,mention';

bot.startRTM(function(err,bot,payload) {
    if (err) {
        throw new Error('Could not connect to Slack');
    }
});

function getRandom(options) {
    var select = Math.floor(Math.random() * options.length);
    return options[select];
};

controller.hears(['kop','bek','klep','mond','ophouden','kappen','nokken'],'direct_message,direct_mention,mention',function(bot,message) {
    bot.reply(message,'Sorry hoor, huilie dat je d\'r bent.');
});

controller.hears(['hello','hi','hallo','hoi','he','hey','jo','yo'],doeMaarLastig,function(bot,message) {
    var response = getRandom([
        'Hou je bek.',
        'Leer is niet zo uit je muil te praten.',
        'Beter kap jij met typen.'
        ]);
    bot.reply(message, response);
});

controller.hears(['tof','gaaf','mooi','cool','vet','awesome'],doeMaarLastig,function(bot,message) {
    var response = getRandom([
            'Die shit is kut man!',
            'Wat een bende.',
            'Gadver, wat een troep.',
            'Jezus, dat? Grapje zeker?'
        ]);
    bot.reply(message, response);
});

controller.hears(['jort','Jort'],doeMaarLastig,function(bot,message) {
    bot.reply(message,"Jezus, wat is Jort eigenlijk een lelijke naam.");
});

controller.hears(['arie'],doeMaarLastig,function(bot,message) {
    var response = getRandom([
        '...',
        'Wat mot je? Zoek je ruzie?',
        'Beter ga je je eigen naam roepen.',
        'Hou mij hier buiten',
        'Bemoei je met je eigen zaken.'
        ]);
    bot.reply(message, response);
});

controller.hears(['klootzak','sukkel','hater','basterd','zak','lul'],doeMaarLastig,function(bot,message) {
    var response = getRandom([
        'Wat je zegt ben je zelf.',
        'Hoor is wie \'t zegt.'
        ]);
    bot.reply(message, response);
});

controller.hears(['misschien'],doeMaarLastig,function(bot,message) {
    bot.reply(message,"Misschien wel niet.");
});

// controller.hears(['beter'],doeMaarLastig,function(bot,message) {
//     bot.reply(message,"")
// })

controller.hears(['nee','niet'],doeMaarLastig,function(bot,message) {
    bot.reply(message,"Wel, verdomme.");
});

controller.hears(['ja','jup'],doeMaarLastig,function(bot,message) {
    bot.reply(message,"Helemaal niet!");
});

controller.hears(['balen'],doeMaarLastig,function(bot,message) {
    bot.reply(message,"Je moeder, die baalt van jou.");
});

controller.hears(['vector','svg'],doeMaarLastig, function(bot,message) {
    bot.reply(message,"Beter doe je bitmap vriend, vector is kut.");
});

controller.hears(['lol', 'rofl'],doeMaarLastig, function(bot,message) {
    bot.reply(message,"Ook als je digitaal lacht, is 'ie lelijk als de nacht.");
});
