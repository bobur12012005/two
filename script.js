let products = [
    {   
        name: "milk",
        type: "milk",
        price: 16000
    },
    {   
        name: "cheese",
        type: "milk",
        price: 25999
    },
    {   
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {   
        name: "govyadina",
        type: "meat",
        price: 90000
    },
    {   
        name: "baranina",
        type: "meat",
        price: 94000
    },
    {   
        name: "kuryatina",
        type: "meat",
        price: 45000
    },
    {   
        name: "vodka",
        type: "alcohol",
        price: 20000
    },
    {   
        name: "tekila",
        type: "alcohol",
        price: 50000
    },
    {   
        name: "pivo",
        type: "alcohol",
        price: 17000
    },
    {   
        name: "champain",
        type: "alcohol",
        price: 100000
    }
]

// 1
// let total_price = products.reduce((a, b) => a + b.price, 0)
// console.log("Общая сумма продуктов: " + total_price);


// 2
// let average_price = products.reduce((a, b) => a + b.price / products.length, 0)
// console.log("Средняя цена продукта: " + average_price);


// 3
// let amount_milk = 0
// let amount_meat = 0
// let amount_alcohol = 0

// let products_amount = products.filter((category) => {
//     if(category.type === "milk") {
//         amount_milk ++
//     } else if(category.type === "meat") {
//         amount_meat ++
//     } else if(category.type === "alcohol") {
//         amount_alcohol ++
//     }
// })

// console.log("количество молочных продуктов: " + amount_milk);
// console.log("количество мясных продуктов: " + amount_meat);
// console.log("количество алкогольных продуктов: " + amount_alcohol);


// 4
// let categories = [];

// products.forEach((product) => {
//   categories[product.type] = (categories[product.type] || 0) + product.price;
// });

// console.log(categories);



let total = 0
let audit = {
    milk: {count: 0, total: 0},
    alcohol: {count: 0, total: 0},
    meat: {count: 0, total: 0}
}

products.forEach(item => {
    total += item.price

    if(audit[item.type]) {
        audit[item.type].count++
        audit[item.type].total += item.price
    }
})

let average = total / products.length

console.log(total);
console.log(audit);
console.log(average);