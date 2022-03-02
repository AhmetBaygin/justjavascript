function friendNums(num1,num2){
    let num1sum=0
    let num2sum=0

    for (let i = 1; i < num1; i++) {
        if(num1%i==0){
            num1sum+=i
        } 
    }
    for (let j = 1; j < num2; j++) {
        if (num2%j==0) {
            num2sum+=j
        }     
    }
    if(num1sum==num2 && num2sum==num1){
        console.log("siz arkadaşsınız")
    }
    else{
        console.log("siz arkadaş değilsiniz")
    }

}

friendNums(1184,1210)