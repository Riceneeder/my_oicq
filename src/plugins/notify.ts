import axios from "axios";
import { parseString } from "xml2js"
/**
 * 成都中医药大学药学院最新公告
 * @returns 
 */
var notify = ()=>{
    let note = new Promise(async(resolve,reject)=>{
        await axios.get('https://node2.feed43.com/7677437554856665.xml').then(
            re=>{
                parseString(re.data,(err,res)=>{
                    if(err){
                        resolve("繁忙,请稍后再试")
                    }
                    var notice = `${res.rss.channel[0].item[0].title}\n${res.rss.channel[0].item[0].link}\n${res.rss.channel[0].item[0].description}`;
                    notice = notice.replace('<p><sub><i>-- Delivered by <a href="http://feed43.com/">Feed43</a> service</i></sub></p>','');
                    resolve(notice);        
                })
            }
        ).catch(
            err=>{
                resolve("繁忙,请稍后再试");
                console.log(err)
            }
        )
    });
    return note;
}

export default notify;