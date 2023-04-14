class Litter {
  constructor(id, { dateOfBirth, dateAcquired, vetInfo, kittens }) {
    this.id = id
    this.dateOfBirth = dateOfBirth
    this.dateAcquired = dateAcquired
    this.vetInfo = vetInfo
    this.kittens = kittens
  }
}

const litterDatabase = {}

const resolvers = {
  getLitters: ({ id }) => {
    return new Litter(id, litterDatabase[id])
  },
  createLitter: ({ input }) => {
    let id = require('crypto').randomBytes(10).toString('hex')
    litterDatabase[id] = input
    return new litter(id, input)
  }
}

export default resolvers