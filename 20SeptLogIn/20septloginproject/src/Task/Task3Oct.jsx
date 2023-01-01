const pyramid = (num)=>{
let str = ""
for(let i = 1;i<=num;i++){
    for(letj=1;j<=i;j++){
        str+=String.fromCharCode((i-1)+65)
    }
    str+='\n'
}
console.log(str)
}
pyramid(5)

