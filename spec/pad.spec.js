const PaddableString = require('../pad')

describe('PaddableString', () => {
    it('is a function of arity 1', () => {
        expect(typeof PaddableString).toEqual('function')
        expect(PaddableString.length).toBe(1)
    })
    it('throws error if a string is not passed', () => {
        expect(() => new PaddableString).toThrowError(`PARAM "input" should be of type "string".`)
    })
    it(`get() gets the value of the input param as it is`, () => {
        const value = 'This is a paddable string'
        const actual = new PaddableString(value).get()
        const expected = value
        expect(actual).toEqual(expected)
        expect(typeof actual).toEqual('string')
    })
    it('rightOnce() pads the string with given character only once', () => {
        const value = 'This is a paddable string'
        const actual = new PaddableString(value).rightOnce('!').get()
        const expected = value + '!'
        expect(actual).toEqual(expected)
    })
    it('leftOnce() pads the string with given character only once', () => {
        const value = 'This is a paddable string'
        const actual = new PaddableString(value).leftOnce('!').get()
        const expected = '!' + value
        expect(actual).toEqual(expected)
    })
    it('right() pads the string with given character n times', () => {
        const value = 'This is a paddable string'
        const actual = new PaddableString(value).right('!', 3).get()
        const expected = value + '!!!'
        expect(actual).toEqual(expected)
    })
    it('left() pads the string with given character n times', () => {
        const value = 'This is a paddable string'
        const actual = new PaddableString(value).left('!', 3).get()
        const expected = '!!!' + value
        expect(actual).toEqual(expected)
    })
    it('around() pads string with given characters', () => {
        const value = 'This is a paddable string'
        const actual = new PaddableString(value).around('!', 3).get()
        const expected = '!!!' + value + '!!!'
        expect(actual).toEqual(expected)
    })
    it('aroundOnce() pads string with given characters', () => {
        const value = 'This is a paddable string'
        const actual = new PaddableString(value).aroundOnce('$').get()
        const expected = '$' + value + '$'
        expect(actual).toEqual(expected)
    })
    it('aroundAsymmetric() pads string with given characters', () => {
        const value = 'This is a paddable string'
        const actual = new PaddableString(value).aroundAsymmetric('!', 3, '#', 5).get()
        const expected = '!!!' + value + '#####'
        expect(actual).toEqual(expected)
    })
    it('aroundAsymmetricOnce() pads string with given characters', () => {
        const value = 'This is a paddable string'
        const actual = new PaddableString(value).aroundAsymmetricOnce('$', '@').get()
        const expected = '$' + value + '@'
        expect(actual).toEqual(expected)
    })
})
