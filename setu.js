const axios = require("axios");

var question = '是';
var BaseUrl = 'http://q.zhizhuoshuma.cn/?question=';
var url = encodeURI(BaseUrl+question);

axios.get(url,{setTimeout:5000}).then(
    re=>{
        let zhen = /{.*?}/ ;
        let res = JSON.parse(zhen.exec(re.data)[0]);
        console.log(res);
    }
)

