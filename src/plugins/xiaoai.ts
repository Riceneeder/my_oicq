import axios from "axios";
/**
 * 小爱AI
 * @param msg 
 * @returns 
 */
var xiaoai = (msg:string)=>{
    var BaseUrl = 'http://api.klizi.cn/API/other/xiaoai.php?data=&msg=';
    var url = encodeURI(BaseUrl+msg);

    let ai = new Promise(
        async (resolve,reject)=>{
            await axios.get(url).then(
                re=>{
                    let AI_msg:string = re.data.text;
                    let _AI_msg = '\t🤖\n' + AI_msg.replace(/小爱/g,'Riceneeder').replace(/你的小米智能助理/g,'智能Qbot');
                    resolve(_AI_msg);
                }
            ).catch(
                err=>{
                    reject('繁忙,请稍后再试');
                    console.log(err);
                }
            )
        }
    )
    return ai;
}

export default xiaoai;