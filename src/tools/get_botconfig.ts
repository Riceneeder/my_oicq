import * as fs from "fs";
import * as path from "path";

function get_botconfig(){
    let config_path:string = path.join(__dirname,'../../','bot_config.json');
    var config = JSON.parse(fs.readFileSync(config_path,{encoding:"utf-8"}));
    var _service = Object.keys(config.service);
    var mune = ["<主要功能>\t\t<用法示例>\n\n"];
    for (let i = 0; i < _service.length; i++) {
        mune[i+1] = '['+ config.service[_service[i]].keyword+']' + '\t' + config.service[_service[i]].how_to_use + '\n';
    }
    config.mune = mune;
    return config;
}

export default get_botconfig;
// get_botconfig();