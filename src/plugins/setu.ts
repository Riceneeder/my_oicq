import axios from "axios";
import { load } from "cheerio";
import getRndInteger from "../tools/getRndInteger";
import imgaudit from "../tools/imgaudit"
/**
 * 涩图
 * @returns 
 */
var setu = ()=>{
    let Tu = new Promise<string>(async (resolve,reject)=>{
        await axios.get(`https://xibi.tv/beauty/${getRndInteger(1,3226)}.html`).then(
            async re=>{
                var $ = load(re.data);
                var list:any = [];
                $('img.alignnone').each((i,e)=>{
                    var src = $(e).attr('src')
                    list.push(src);
                });
                var setunum = getRndInteger(0,list.length-1);
                var setuUrl = list[setunum];
                var is_img_ok = await imgaudit(setuUrl);
                var setu = `---💃---${is_img_ok}-[CQ:image,file=${setuUrl}]`;
                resolve(setu);
            }
        ).catch(
            err=>{
                reject('繁忙,请稍后再试');
                console.log(err);
            }
        );
    });
    return Tu;
}

export default setu;