// export default(arr) => {
function porkFun(arr){
  arr.sort((a, b) => a-b)
  let min = Number.MAX_SAFE_INTEGER
  let dst = []
  let result = true

  for(let i = 0, len=arr.length,tmp=[];i<len; i++){
    tmp.push(arr[i])
    for(let j = i+1; j<len-1; j++){
      if(arr[j] === arr[i]){
        tmp.push(arr[j])
      }else{
        console.log(tmp.length)
        if(min > tmp.length){
          min = tmp.length
        }
        dst.push([].concat(tmp))
        //清空
        tmp.length = 0;
        i = j;
        break;
      }
    }
  }
  

  //检查
  console.log(dst)
  dst.every(item => {
    if(item.length % min !== 0){
      result = false
      return false
    }
  })

  return result
}

module.exports = porkFun;
console.log(porkFun([1,1,1,3,5,3,5,5,3]))