import { createClient, ConfBot } from "oicq";
import get_botconfig from "./tools/get_botconfig";
import wiki from "./plugins/wiki";
import notify from "./plugins/notify";
import setu from "./plugins/setu";
import findAnswer from "./plugins/findAnswer"


var config = get_botconfig();
var mune = '';
for (let i = 0; i < config.mune.length; i++) {
    mune += config.mune[i];
}

const botconfig: ConfBot = { platform: 4 };
const client = createClient(config.qq_num, botconfig);

/****************************************
 * 手机QQ扫描二维码登录(与下面的密码登录二选一)
 * 优点是不需要过滑块和设备锁
 * 缺点是万一token失效，无法自动登录，需要重新扫码
 */



client.on("system.login.qrcode", function (event) {
    process.stdin.once("data", () => {
        this.login(); //扫码后按回车登录
    });
}).login(); //这里不填写密码

client.on("message", async (event) => {
    let msg: string = event.raw_message;

    if (msg == "指令集") {
        event.reply(mune);
    }

    if (msg.includes("维基百科") && config.service.wiki.online) {
        let target_msg = msg.replace("维基百科", "").trim();
        let result = await wiki(target_msg);
        event.reply(`${result}`);
    }

    if (msg.includes("搜题") && config.service.findanswer.online) {
        let target_msg = msg.replace("搜题", "").trim();
        let result = await findAnswer(target_msg);
        event.reply(`${result}`);
    }

    if (msg == "学院公告" && config.service.notify.online) {
        let note = await notify();
        event.reply(`${note}`);
    }

    if (config.service.setu.online) {
        if (msg.includes("涩图") || msg.includes("setu") || msg.includes("色图") || msg.includes("延年益寿") || msg.includes("不够色")) {
            let _setu = await setu();
            event.reply(`${_setu}`);
        }
    }

})

// client.on('message.group',(data)=>{
//     console.log(data);
// })