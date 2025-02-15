/**
 * Truncates a message to the specified maximum length. If the message exceeds
 * the maximum length, it is truncated and an ellipsis ("...") is appended.
 *
 * @param {string} message The message to be formatted or truncated.
 * @param {number} maxLength The maximum allowed length of the formatted message.
 * @return {string} The formatted message, truncated if necessary, with an ellipsis appended if truncated.
 */
function formatMessage(message, maxLength) {
    if (typeof message !== "string") {
        throw new TypeError("Invalid input: 'message' must be a string.");
    }
    if (typeof maxLength !== "number" || maxLength < 0) {
        throw new TypeError("Invalid input: 'maxLength' must be a non-negative number.");
    }
    if (message.length <= maxLength) {
        return message;
    } else {
        return message.slice(0, maxLength) + "...";
    }
}


console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"