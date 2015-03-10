module.exports = function(operands) {
    operands = operands || {};
    var a = "a" in operands ? (isFinite(operands.a) ? parseInt(operands.a, 10) : "not a number") : "not present";
    var b = "b" in operands ? (isFinite(operands.b) ? parseInt(operands.b, 10) : "not a number") : "not present";
    var sum = (typeof a === "number" && typeof b === "number") ? (a + b).toString() : "not a number"
    return {
        a: a,
        b: b,
        sum: sum
    }
};