interface item{
    name:string
    price:number
}
const Car:item={
    name:'Mercedes-Benz'
    ,price: 98950
}
const Book:item={
    name:'ESSENTIAL TYPESCRIPT'
    ,price: 200
}
console.log(`Car name:${Car.name}\nprice: $${Car.price}`)
console.log(`Book name:${Book.name}\nprice: $${Book.price}`);