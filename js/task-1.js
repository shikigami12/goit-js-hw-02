/**
 * Function that processes a transaction for purchasing droids.
 *
 * @param {number} quantity - The number of droids to purchase. Must be a positive number.
 * @param {number} pricePerDroid - The price of one droid. Must be a positive number.
 * @param {number} customerCredits - The total credits available for the customer. Must be a positive number.
 * @returns {string} A message indicating the transaction result: success with the total cost or failure reason.
 */
function makeTransaction(quantity, pricePerDroid, customerCredits) {
    if (quantity <= 0) {
        return "Quantity must be a positive number!";
    }
    if (pricePerDroid <= 0) {
        return "Price per droid must be a positive number!";
    }
    if (customerCredits <= 0) {
        return "Customer credits must be a positive number!";
    }
    if (typeof quantity !== "number" || typeof pricePerDroid !== "number" || typeof customerCredits !== "number") {
        return "Quantity, price per droid and customer credits must be numbers!";
    }

    const totalPrice = quantity * pricePerDroid;

    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"