// function addToCart(productName) {
//     console.log("sepete eklendi : "+productName)
// }

// addToCart(31)

// let sayHello = ()=>{
//     console.log("hellow World")
// }
// sayHello()

// let sayHello2 = function() {
//     console.log("hellow world 2")
// }
// sayHello2()

let product1= {
    productName:"elma",
    quantity:31,
    unitPrice:10
}
function addToCartt(product){
    console.log(product.productName)
    console.log(product.quantity)
    console.log(product.unitPrice)
}

addToCartt(product1)

function add(...numbers){ //rest operatoru deniyor gelen değerleri dizi olarak algılıyor istediğin kadar değer girilebilir
    let sum=0
    for (let i = 0; i < numbers.length; i++) {
        
        sum+=numbers[i]
    }
    return sum
}
console.log(add(31,32,32,33))
let dizi=[31,32,33,21]
console.log(Math.max(...dizi)) //... diziyi ayırır düz dizi olarak yolladığımızda programımız hata verir 3 nokta dizi ayırır

let [icAnadolu,Marmara,Karadeniz,[icanadoluSehirleri]] = [ 
    {name:"içAnadolu",population:"20m"},
    {name:"Marmara",population:"30m"},
    {name:"Karadeniz",population:"11m"},
    [
        ["ankara","konya"],
        ["istanbul","bursa"],
        ["sinop","trabzon"],

    ]
]

console.log(icanadoluSehirleri) //dizileri tanımlarken başka bir dizi tanımıyla tanımlayabiliriz istediğimiz değişken adıyla
//tanım yapıcagımız yeri köşeli parantez içine almamız gerekli

let a,b,c 
({productName:a,quantity:b,unitPrice:c}= {productName:"elma",quantity:31,unitPrice:33})
console.log(a)