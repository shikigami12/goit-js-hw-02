/**
 * Checks if a given message contains spam words.
 *
 * @param {string} message - The message to be checked for spam content.
 * @return {boolean} Returns true if the message contains spam words, otherwise returns false.
 */
function checkForSpam(message) {
    if (typeof message !== "string") {
        return false;
    }
    const messageLowerCase = message.toLowerCase();
    const spamWords = ["sale", "spam"];
    for (let i = 0; i < spamWords.length; i++) {
        if (messageLowerCase.includes(spamWords[i])) {
            return true;
        }
    }
    return false;
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true