import axios from "axios";
/**
 * 网课搜题
 * @param question 题目
 * @returns 
 */
var findAnswer = (question:string)=>{
    var BaseUrl = 'http://q.zhizhuoshuma.cn/?question=';
    var url = encodeURI(BaseUrl+question);
    let answer = new Promise<string>(async (resolve,reject)=>{
        await axios.get(url).then(
            re=>{
                let redress = /{.*?}/ ;
                let res = JSON.parse(redress.exec(re.data)![0]);
                if(res.success == 'true'){
                    let Fanswer = `🔎${res.question}\n👍${res.answer}`;
                    resolve(Fanswer);
                }else{
                    let Fanswer = `🔎${question}\n👎没有查到,试试完整题目,不要复制选项`;
                    resolve(Fanswer);
                }

            }
        ).catch(
            err=>{
                reject('繁忙,请稍后再试');
                console.log(err);
            }
        )
    });
    return answer;
}

export default findAnswer;