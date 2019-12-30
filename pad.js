class PaddableString {
    constructor(input) {
        if (typeof input !== 'string') {
            throw new TypeError(`PARAM "input" should be of type "string".`)
        }
        this.value = input
    }
    rightOnce(ch) {
        this.value = this.value + ch
        return this
    }
    leftOnce(ch) {
        this.value = ch + this.value
        return this
    }
    right(ch, times) {
        this.value = this.value + Array(times).fill(ch).join('')
        return this
    }
    left(ch, times) {
        this.value = Array(times).fill(ch).join('') + this.value
        return this
    }
    get() {
        return this.value
    }
    aroundOnce(ch) {
        this.value = ch + this.value + ch
        return this
    }
    around(ch, times) {
        this.value = Array(times).fill(ch).join('') + this.value + Array(times).fill(ch).join('')
        return this
    }
    aroundAsymmetricOnce(prefix, suffix) {
        this.value = prefix + this.value + suffix
        return this
    }
    aroundAsymmetric(prefix, ptimes, suffix, stimes) {
        this.value = Array(ptimes).fill(prefix).join('') + this.value + Array(stimes).fill(suffix).join('')
        return this
    }
}

module.exports = PaddableString
