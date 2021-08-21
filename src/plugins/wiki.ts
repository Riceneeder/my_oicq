import axios from "axios";
/**
 * 维基百科
 * @param msg 
 * @returns 
 */
var wiki = (msg:string)=>{
    let Wiki = new Promise(async (resolve, reject) => {
        var url = encodeURI(`https://chi.jinzhao.wiki/w/api.php?action=query&prop=extracts&exchars=250&explaintext=true&titles=${msg}&format=json&redirects=true&uselang=zh-hans`)
        await axios.get(url).then(
            re => {
                let result = re.data.query.pages;
                if (result["-1"]) {
                    resolve(`没有查到或者可能没有正确的返回数据\n可以前往此页面查看\nhttps://chi.jinzhao.wiki/wiki/${msg}`);
                } else {
                    let key = Object.keys(result)[0];
                    // console.log(result[`${key}`].extract);
                    let wiki = result[`${key}`].extract;
                    resolve(`${wiki}\n\n数据来源于维基百科\nhttps://chi.jinzhao.wiki/wiki/${encodeURI(msg)}`);
                }
            }
        ).catch(
            err => {
                console.log(err);
                reject(err);
            }
        );
    
    });
    return Wiki;
}

export default wiki;