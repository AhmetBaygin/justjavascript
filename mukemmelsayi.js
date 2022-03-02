function mukemmelNum(){
    let tutucu=0
    let mukemmelArray = []
    for (let i = 2; i < 1000; i++) {
        for(let j=1; j<i; j++){
            if(i%j==0){
                tutucu+=j
            }
            
        }
        if(i==(tutucu)){
            console.log("sen mükemmel bir sayısın")
            mukemmelArray.push(i)
        }
        tutucu=0
      
    }
    console.log(mukemmelArray)
}

mukemmelNum()