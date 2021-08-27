const axios = require("axios");

// var question = '你是';
var url = 'http://yubanapi.top/API/r18/index.php?type=string';
// var url = encodeURI(BaseUrl+question);

axios.get(url).then(
    re=>{

        console.log(re.data.ImgUrl);
    }
)

