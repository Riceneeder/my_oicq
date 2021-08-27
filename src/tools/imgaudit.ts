import axios from "axios";
/**
 * 图像审核
 * @param imgurl 
 * @returns 
 */
var imgaudit = (imgurl:string)=>{
    var BaseURl = 'https://api.xingzhige.com/API/tpjhlq/api.php?url=';
    var url = encodeURI(BaseURl+imgurl);

    let _imgaudit=new Promise(
        async (resolve,reject)=>{
            await axios.get(url).then(
                re=>{
                    if(re.data.text == '图片正常'){
                        resolve('✅')
                    }
                    resolve('🔞')
                }
            ).catch(
                err=>{
                    console.log(err);
                    resolve(`err->${__filename}`)
                }
            )
        }
    )
    return _imgaudit;
}

export default imgaudit;