function findPrime(...numbers){
    let result=[]
    let counter = 0
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 2; j < numbers[i]; j++) {
            if(numbers[i]%j==0){
                counter++
                break
            }
            
                  
        }
        if(counter==0){
            result.push(numbers[i])

        }
        counter=0
}
console.log(result)
}
findPrime(2,4,41,51,61,71,81,91,3)