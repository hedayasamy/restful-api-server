import faker from 'faker'

export default function makeFakeCheck (overrides) {
  const check = {
    url: faker.internet.url,
    name: faker.name.findName(),
    protocol: 'http',
    user: 1,
  }

  return {
    ...check,
    ...overrides
  }
}