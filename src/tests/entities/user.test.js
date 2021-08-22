import makeFakeUser from '../fixtures/user.js'
import makeUser from '../../entities/user/index.js'
import jwtService from '../../helpers/jwt.js'
describe('user', () => {
  it('must have a name', () => {
    const user = makeFakeUser({ name: null })
    console.log(user)
    expect(() => makeUser(user)).toThrow('User must have a name.')
  })
  it('must have a password', () => {
    const user = makeFakeUser({ password: null })
    expect(() => makeUser(user)).toThrow('User must have a password.')
  })
  it('must have an email', () => {
    const user = makeFakeUser({ email: null })
    expect(() => makeUser(user)).toThrow('User must have an email.')
  })
  it('must have a valid email', () => {
    const user = makeFakeUser({ email: 'test' })
    expect(() => makeUser(user)).toThrow(
      'Please enter a valid email.'
    )
  })
  it('must have a valid password', () => {
    const user = makeFakeUser({ password: '1234' })
    expect(() => makeUser(user)).toThrow(
      'Password should be at least 6 characters.'
    )
  })
  it('must create a secret token', () => {
    const user = makeFakeUser({ password: '123456', email: 'test@bosta.com', name: 'test' })
    const userWithSecretToken = makeUser(user)
    expect(userWithSecretToken.getSecretToken()).toBe(jwtService.signUser({ password: '123456', email: 'test@bosta.com', name: 'test' }, {expiresIn : "20m"}))
  })
  it('is createdOn now in UTC', () => {
    const noCreationDate = makeFakeUser({ createdOn: undefined })
    expect(noCreationDate.createdOn).not.toBeDefined()
    const d = makeUser(noCreationDate).getCreatedOn()
    expect(d).toBeDefined()
    expect(new Date(d).toUTCString().substring(26)).toBe('GMT')
  })
  it('is modifiedOn now in UTC', () => {
    const noModifiedOnDate = makeFakeUser({ modifiedOn: undefined })
    expect(noModifiedOnDate.modifiedOn).not.toBeDefined()
    const d = makeUser(noModifiedOnDate).getCreatedOn()
    expect(d).toBeDefined()
    expect(new Date(d).toUTCString().substring(26)).toBe('GMT')
  })
})