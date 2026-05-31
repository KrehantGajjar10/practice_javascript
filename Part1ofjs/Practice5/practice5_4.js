/*

// Discount Calculator (HOF)

function DiscountCalculator(discount) {
    return function (price) {
        return price - (price * (discount/100));
    };
}
let tenPercentDiscount = DiscountCalculator(10);
let twentyPercentDiscount = DiscountCalculator(20);
console.log(tenPercentDiscount(100)); // 90
console.log(twentyPercentDiscount(100)); // 80

*/