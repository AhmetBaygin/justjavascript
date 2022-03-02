function asalSayilar(){
    let result=true;
    let tutucuArray = []
    for (let i = 2; i < 1000; i++) {
        for (let j = 2; j < i; j++) {
            if(i%j==0){
                result=false
            }
        }
        if(result){
            tutucuArray.push(i)
        }
        result=true
        
        
    }
    console.log(tutucuArray)
}
asalSayilar()