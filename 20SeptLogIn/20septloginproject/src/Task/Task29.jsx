const pyramid = (rows) =>{
    let demo = ""
    for(let i= 1;i<=rows;i++){
      demo+="*".repeat(i) +"\n"
    }
    console.log(demo)
}

pyramid(5)