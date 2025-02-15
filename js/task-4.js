/**
 * Calculates the shipping cost based on the specified country.
 *
 * @param {string} country - The name of the country to calculate the shipping cost for.
 * @return {string} The shipping cost message for the specified country, or an error message if delivery is unavailable.
 */
function getShippingCost(country) {
    let shippingCost;

    switch (country) {
        case "China":
            shippingCost = 100;
            break;
        case "Chile":
            shippingCost = 250;
            break;
        case "Australia":
            shippingCost = 170;
            break;
        case "Jamaica":
            shippingCost = 120;
            break;
    }

    if (shippingCost === undefined) {
        return "Sorry, there is no delivery to your country";
    }

    return `Shipping to ${country} will cost ${shippingCost} credits`;
}


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"