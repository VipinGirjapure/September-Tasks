for(let i = 1;i<=5;i++){
    let str=""
        for(let j=1;j<=5;j++){
            if(i===1||i===5){
                str+="* "
            }
            else if(j===1||j===5){
                str+="* "
            }
            else str+="  "
        }
        console.log(str)
    }