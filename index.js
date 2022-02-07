const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njg0MzQ5NzEwNjM4OTA3NTA0.Xl41CA.XX-w3pCglr5Aita3HKfltlGw7JY';

bot.login(token);

const PREFIX= '?';

var version = '2.0.1';

name = 'Hedeey';

bot.on('ready', ()=>{
   console.log('Hi');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");
            
    switch(args[0]){
        case '정보':
                const embed = new Discord.RichEmbed()
                .setTitle('유저 정보')
                .addField('유저 닉네임', message.author.username, true)
                .addField('봇 버전', version, true)
                .addField('현제 서버', message.guild.name, true)
                .setColor(0xA2FF44)
                .setThumbnail(message.author.avatarURL)
                .setFooter('이게 너님 정보 이십니다')
                message.channel.sendEmbed(embed);
        break;
    }    
    switch(args[0]){
        case '야':
            if(!args[1]) return message.reply('히히')
            switch(args[1]){
                case '지윤':
                    message.reply('소난다 넣을께~');
                break;    
            }
        }
    switch(args[0]){
        case '청소':
            if(!args[1]) return message.reply('삭제할 채팅의 양을 정해주세요')
            message.channel.bulkDelete(args[1]);
            break;

           
    
        case '버전':
            message.reply('버전' + version);
        break;

        case '개발자':
            message.reply('Polarbear'+name);
        break;

        case '태강':
            message.reply('ㅗ');
        break;

        case '신지윤':
            message.reply('앞으론 갱 잘 갈께 안쪼개고')  
    }

    switch(args[0]){
        case '소난다':
            const attachment = new Attachment('https://img.danawa.com/prod_img/500000/639/021/img/1021639_1.jpg?shrink=500:500&_v=20100217091819.png')
            message.channel.send(message.author, attachment);
        break;
    }

    switch(args[0]){
        case '소는못날아':
            const attachment = new Attachment('https://opgg-com-image.akamaized.net/attach/images/20200121061231.795297.jpg')
            message.channel.send(message.author, attachment);
        break;
    }

    switch(args[0]){
        case '야':
            if(!args[1]) return message.reply('히히')
            switch(args[1]){
                case '피연':
                    message.reply('소난ㄷ..ㅏ 오우씨 하면 강퇴당함');
                break;    
            }
        }

    switch(args[0]){
        case '야':
            if(!args[1]) return message.reply('히히')
            switch(args[1]){
                case '태강':
                    message.reply('소~~난~~다 너으을ㄲㅔ');
                break;    
            }
        }

    switch(args[0]){
        case '야':
            if(!args[1]) return message.reply('히히')
            switch(args[1]){
                case '재욱':
                    message.reply('소난다 씨bal 넣는다');
                break;    
            }
        }

        switch(args[0]){
            case '야':
                if(!args[1]) return message.reply('히히')
                switch(args[1]){
                    case '재욱':
                        message.reply('소~~난다 이게 취향이구나^^ 넣을께');
                    break;    
                }
            }

        switch(args[0]){
            case '야':
                if(!args[1]) return message.reply('히히')
                switch(args[1]){
                    case '준이':
                        message.reply('소~난~~~다 넣는다~ 섀꺄');
                    break;    
                }
            }
            
        switch(args[0]){
            case '야':
                if(!args[1]) return message.reply('히히')
                switch(args[1]){
                    case '정범':
                        message.reply('뭘 넣어 미띤넘아');
                    break;    
                }
            }
            
        switch(args[0]){
            case '야':
                if(!args[1]) return message.reply('히히')
                switch(args[1]){
                    case '지윤':
                        message.reply('소난다~ 넣~는~다~~!');
                    break;    
                }
            }                            
    
})

    

    
         
 

    




