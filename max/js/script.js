let shopList = [{
        product: 'sausage',
        howmuch: 10,
        check: 'true',
        price: 10,
        sum: 100,
    },
    {
        product: 'bread',
        howmuch: 1,
        check: 'false',
        price: 5,
        sum: 5,
    },
    {
        product: 'butter',
        howmuch: 2,
        check: 'false',
        price: 8,
        sum: 16,
    },
    {
        product: 'orange',
        howmuch: 5,
        check: 'true',
        price: 7,
        sum: 35,
    },
];
console.log(shopList);

shopList.push({
    product: 'apple',
    howmuch: 3,
    check: 'true',
    price: 3,
    sum: 9,
});
console.log(shopList);

let sumAllProducts = shopList.reduce((total, amount) => total + amount.sum, 0);
console.log(sumAllProducts);


let amountNotBuyProducts = shopList
    .filter(x => x.check == 'false')
    .reduce((total, amount) => total + amount.sum, 0);
console.log(amountNotBuyProducts);

shopList.sort((a, b) => a.sum - b.sum);
console.log(shopList);

// shopList.sort((a, b) => b.sum - a.sum);
// console.log(shopList);