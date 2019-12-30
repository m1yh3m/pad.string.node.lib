const {
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
} = require('../lib')

describe('padding library', () => {
    it('around()', () => {
        const input = 'input'
        const actual = around('!', 4, input)
        const expected = '!!!!' + input + '!!!!'
        expect(actual).toEqual(expected)
    })
    it('aroundAsymmetric()', () => {
        const input = 'input'
        const actual = aroundAsymmetric('!', 2, '@', 3, input)
        const expected = '!!' + input + '@@@'
        expect(actual).toEqual(expected)
    })
    it('aroundAsymmetricOnce()', () => {
        const input = 'input'
        const actual = aroundAsymmetricOnce('!', '@', input)
        const expected = '!' + input + '@'
        expect(actual).toEqual(expected)
    })
    it('aroundOnce()', () => {
        const input = 'input'
        const actual = aroundOnce('!', input)
        const expected = '!' + input + '!'
        expect(actual).toEqual(expected)
    })
    it('left()', () => {
        const input = 'input'
        const actual = left('!', 2, input)
        const expected = '!!' + input
        expect(actual).toEqual(expected)
    })
    it('leftOnce()', () => {
        const input = 'input'
        const actual = leftOnce('!', input)
        const expected = '!' + input
        expect(actual).toEqual(expected)
    })
    it('right()', () => {
        const input = 'input'
        const actual = right('!', 4, input)
        const expected = input + '!!!!'
        expect(actual).toEqual(expected)
    })
    it('rightOnce()', () => {
        const input = 'input'
        const actual = rightOnce('!', input)
        const expected = input + '!'
        expect(actual).toEqual(expected)
    })
    it('isString()', () => {
        const input = 'input'
        const actual = isString(input)
        const expected = true
        expect(actual).toEqual(expected)
    })
    it('isNotString()', () => {
        const input = 'input'
        const actual = isNotString(input)
        const expected = false
        expect(actual).toEqual(expected)
    })
    describe('segmentLeft()', () => {
        it('one', () => {
            const input = 'input'
            const actual = segmentLeft('=', 4, input)
            const expected = '===' + input
            expect(actual).toEqual(expected)
        })
        it('two', () => {
            const input = 'inputs'
            const actual = segmentLeft('=', 4, input)
            const expected = '==' + input
            expect(actual).toEqual(expected)
        })
        it('three', () => {
            const input = 'inputss'
            const actual = segmentLeft('=', 4, input)
            const expected = '=' + input
            expect(actual).toEqual(expected)
        })
        it('four', () => {
            const input = 'inpu'
            const actual = segmentLeft('=', 4, input)
            const expected = input
            expect(actual).toEqual(expected)
        })
    })
    describe('segmentRight()', () => {
        it('one', () => {
            const input = 'input'
            const actual = segmentRight('=', 4, input)
            const expected = input + '==='
            expect(actual).toEqual(expected)
        })
        it('two', () => {
            const input = 'inputs'
            const actual = segmentRight('=', 4, input)
            const expected = input + '=='
            expect(actual).toEqual(expected)
        })
        it('three', () => {
            const input = 'inputss'
            const actual = segmentRight('=', 4, input)
            const expected = input + '='
            expect(actual).toEqual(expected)
        })
        it('four', () => {
            const input = 'inpu'
            const actual = segmentRight('=', 4, input)
            const expected = input
            expect(actual).toEqual(expected)
        })
    })
})
