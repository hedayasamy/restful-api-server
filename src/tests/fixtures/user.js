import faker from 'faker'

export default function makeFakeUser (overrides) {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }

  return {
    ...user,
    ...overrides
  }
}