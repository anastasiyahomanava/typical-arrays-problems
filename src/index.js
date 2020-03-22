
exports.min = function min (array) {
    if (Array.isArray(array) === false || array === undefined) return 0;
    else if (array.length === 0) return 0;

    return array.reduce((a, b) => Math.min(a, b));
}

exports.max = function max (array) {
    if (Array.isArray(array) === false || array === undefined) return 0;
    else if (array.length === 0) return 0;

    return array.reduce((a, b) => Math.max(a, b));
}

exports.avg = function avg (array) {
    if (Array.isArray(array) === false || array === undefined) return 0;
    else if (array.length === 0) return 0;

    return array.reduce((a, b) => a + b, 0) / array.length;
}
