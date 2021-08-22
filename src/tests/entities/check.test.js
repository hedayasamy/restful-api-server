import makeFakeCheck from '../fixtures/check.js'
import makeCheck from '../../entities/check/index.js'
describe('check', () => {
  it('must have a name', () => {
    const check = makeFakeCheck({ name: null })
    expect(() => makeCheck(check)).toThrow('Check must have a name.')
  })
  it('must have a user', () => {
    const check = makeFakeCheck({ user: null })
    expect(() => makeCheck(check)).toThrow('Check must have a user.')
  })
  it('must have a protocol', () => {
    const check = makeFakeCheck({ protocol: null })
    expect(() => makeCheck(check)).toThrow('Check must have a protocol.')
  })
  it('must have a url', () => {
    const check = makeFakeCheck({ url: null })
    expect(() => makeCheck(check)).toThrow('Check must have a url.')
  })
  it('must have a valid protocol', () => {
    const check = makeFakeCheck({ protocol: 'testProtocol' })
    expect(() => makeCheck(check)).toThrow(
      'Invalid Protocol. Checks only support http, https and tcp protocols.'
    )
  })
  it('must have an active status', () => {
    const fakeCheck = makeFakeCheck()
    const check = makeCheck(fakeCheck)
    expect(check.getStatus()).toBe('active')
  })
})