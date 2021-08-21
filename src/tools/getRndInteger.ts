/**
 * 获得随机数
 * @param min 最小数
 * @param max 最大数
 * @returns 
 */
function getRndInteger(min:any, max:any) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default getRndInteger;