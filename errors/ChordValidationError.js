
// This error is for all the times when a chord is not a chord.

function ChordValidationError(message) {
    this.name = "ChordValidationError";
    this.message = (message || "That is absolutely not a chord.");
}
ChordValidationError.prototype = Error.prototype;

module.exports = ChordValidationError;