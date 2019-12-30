const {
    around,
    aroundAsymmetric,
    aroundAsymmetricOnce,
    aroundOnce,
    left,
    leftOnce,
    right,
    rightOnce,
    isNotString,
    segmentLeft,
    segmentRight
} = require('./lib')

class PaddableString {
    constructor(input) {
        if (isNotString(input)) {
            throw new TypeError(`PARAM "input" should be of type "string".`)
        }
        this.value = input
    }
    rightOnce(ch) {
        this.value = rightOnce(ch, this.value)
        return this
    }
    leftOnce(ch) {
        this.value = leftOnce(ch, this.value)
        return this
    }
    right(ch, times) {
        this.value = right(ch, times, this.value)
        return this
    }
    left(ch, times) {
        this.value = left(ch, times, this.value)
        return this
    }
    get() {
        return this.value
    }
    aroundOnce(ch) {
        this.value = aroundOnce(ch, this.value)
        return this
    }
    around(ch, times) {
        this.value = around(ch, times, this.value)
        return this
    }
    aroundAsymmetricOnce(prefix, suffix) {
        this.value = aroundAsymmetricOnce(prefix, suffix, this.value)
        return this
    }
    aroundAsymmetric(prefix, ptimes, suffix, stimes) {
        this.value = aroundAsymmetric(prefix, ptimes, suffix, stimes, this.value)
        return this
    }
    segmentLeft(ch, segmentLength) {
        this.value = segmentLeft(ch, segmentLength, this.value)
        return this
    }
    segmentRight(ch, segmentLength) {
        this.value = segmentRight(ch, segmentLength, this.value)
        return this
    }
}

module.exports = PaddableString
