// Last and First Indexes are different
"use strict";

function checkio(data) {
    return data.filter(function(a) {
        return data.indexOf(a) !== data.lastIndexOf(a)
    });
}
// =========================================
function nonUniqueElements(data) {
    return data.filter(e => data.filter(k => k == e).length > 1);
}
// ===========================================
const nonUniqueElements = (d) => d.filter(v => d.indexOf(v) !== d.lastIndexOf(v));
// =======================================

var assert = require('assert');

if (false) {
    assert.deepEqual(checkio([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(checkio([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(checkio([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(checkio([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    assert.deepEqual(checkio(['P', 7, 'j', 'A', 'P', 'N', 'Z', 'i',
        'A', 'X', 'j', 'L', 'y', 's', 'K', 'g',
        'p', 'r', 7, 'b'
    ]), ['P', 7, 'j', 'A', 'P', 'A', 'j', 'p', 7], "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");