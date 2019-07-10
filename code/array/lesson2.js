function poneSortFun(str){
  let map = ['', 1, 'abc','def','jhi','jkl','mno','pqrs','tuv','wxyz']
  let num = str.split('')

  let code = []
  num.forEach(element => {
    map[element] && code.push(map[element])
  });

  let comb = (arr)=>{
    //保存前两个组合的结果
    let tmp = [];
    for(let i=0,il = arr[0].length; i<il; i++){
      for(let j =0, jl = arr[1].length; j<jl; j++){
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    //从下标0开始删除，删除两项，再添加tmp进去
    arr.splice(0, 2, tmp)
    if(arr.length > 1){
      comb(arr)
    }else{
      return tmp
    }

    return arr[0]
  }
  return comb(code)
}
module.exports = poneSortFun;

//console.log(poneSortFun('234'))
