const myNums = [1 ,2 , 3]

// const myTotal = myNums.reduce((accumulator,current) => {
//    console.log(`acc: ${accumulator} and current value is ${current}`);
//     return accumulator + current
// },0)
// console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce((accu,item) => 
    { return accu + item.price},0)
console.log(pricetopay);