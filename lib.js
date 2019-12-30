function isString(input) {
    return typeof input === 'string'
}
function isNotString(input) {
    return !isString(input)
}
function aroundOnce(ch, input) {
    return ch + input + ch
}
function around(ch, times, input) {
    return Array(times).fill(ch).join('') + input + Array(times).fill(ch).join('')
}
function aroundAsymmetric(prefix, ptimes, suffix, stimes, input) {
    return Array(ptimes).fill(prefix).join('') + input + Array(stimes).fill(suffix).join('')
}
function aroundAsymmetricOnce(prefix, suffix, input) {
    return prefix + input + suffix
}
function rightOnce(ch, input) {
    return input + ch
}
function leftOnce(ch, input) {
    return ch + input
}
function right(ch, times, input) {
    return input + Array(times).fill(ch).join('')
}
function left(ch, times, input) {
    return Array(times).fill(ch).join('') + input
}
function segmentRight(ch, segmentLength, input) {
    const strlen = input.length
    const diff = strlen % segmentLength
    const times = (segmentLength - diff) % segmentLength
    return right(ch, times, input)
}
function segmentLeft(ch, segmentLength, input) {
    const strlen = input.length
    const diff = strlen % segmentLength
    const times = (segmentLength - diff) % segmentLength
    return left(ch, times, input)
}

module.exports = {
    around,
    aroundAsymmetric,
    aroundAsymmetricOnce,
    aroundOnce,
    left,
    leftOnce,
    right,
    rightOnce,
    isString,
    isNotString,
    segmentLeft,
    segmentRight
}
