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

let deleteProducts = shopList.filter(delprod => delprod.product != 'sausage');
console.log(deleteProducts);

shopList.push({
    product: 'apple',
    howmuch: 3,
    check: 'true',
    price: 3,
    sum: 9,
});
console.log(shopList);