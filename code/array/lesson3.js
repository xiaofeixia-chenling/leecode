//声明一个函数
/**
 * [flower description]
 * @param  {[type]} arr 给一块地,数组[1,0,0,1]
 * @param  {[type]} num 能种几多花
 * @return {[type]}     能种 true 种不了 false
 */
function flower(arr, num){
    var max = 0
    for(var i = 0; i< arr.length -1; i++){
        if(arr[i] === 0){
            if(i === 0 && arr[1] === 0){
                max ++
                i++
            }else if(arr[i-1] === 0 && arr[i+1] === 0){
                max ++
                i++
            }
        }
    }

    return max >= num
}

//console.log(flower([1,0,0,0,1],1))

module.exports = flower;
