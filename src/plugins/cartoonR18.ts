import axios from "axios";
/**
 * 卡通R18(闪图)
 * @returns
 */
var cartoonR18 = ()=>{
    var url = 'http://yubanapi.top/API/r18/index.php?type=string';

    let R18 = new Promise<string>(
        async (resolve,reject)=>{
            await axios.get(url).then(
                re=>{
                    let imgurl = re.data.ImgUrl;
                    let flash = `[CQ:flash,file=${imgurl}]`;
                    resolve(flash);
                }
            ).catch(
                err=>{
                    reject('繁忙,请稍后再试');
                    console.log(err);
                }
            )
        }
    )
    return R18;
}

export default cartoonR18;