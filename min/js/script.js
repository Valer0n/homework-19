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

function sortName(a, b) {
    if (a.check > b.check) return 1;
    if (a.check < b.check) return -1;
    return 0;
};
console.log(shopList.sort(sortName));


let notBuyProducts = shopList.filter(x => x.check == 'false');
console.log(notBuyProducts);