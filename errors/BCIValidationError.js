
// This error is for all the times when a chord is not a chord.

function BciValidationError(message) {
    this.name = "BciValidationError";
    this.message = (message || "That is literally not a BIFFUD Chord Index.");
}
BciValidationError.prototype = Error.prototype;

module.exports = BciValidationError;