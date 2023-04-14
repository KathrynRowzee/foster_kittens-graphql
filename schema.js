import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Litter {
    id: ID
    dateOfBirth: String
    dateAcquired: String
    vetInfo: [VetRecord]
    kittens: [Kitten] 
  }

  type VetRecord {
    id: ID
    litterID: ID
    description: String
    date: String
    notes: String
  }

  type Kitten {
    id: ID
    litterID: ID
    sex: Sex
    color: String
    profileColor: String
    notes: String
    careLog: [CareLog]
  }

  type CareLog {
    id: ID
    kittenID: ID
    timestamp: String
    preWeight: Float
    postWeight: Float
    amountEaten: Float
    uColor: UColor
    fConsistency: FConsistency
    fColor: FColor
    temperature: Float
  }

  enum Sex {
    M
    F
  }

  enum UColor {
    pale
    dark
  }

  enum FColor {
    brown
    yellow
    green
    beige
    black
    red
  }

  enum FConsistency {
    mucousy
    curdled
    liquid
    soft
    hard
    formed
  }

  type Query {
    getLitter(id: ID): Litter
  }

  input LitterInput {
    id: ID
    dateOfBirth: String
    dateAcquired: String
    vetInfo: [VetRecordInput]
    kittens: [KittenInput] 
  }

  input VetRecordInput {
    id: ID
    litterID: ID
    description: String
    date: String
    notes: String
  }

  input KittenInput {
    id: ID
    litterID: ID
    sex: Sex
    color: String
    profileColor: String
    notes: String
    careLog: [CareLogInput]
  }

  input CareLogInput {
    id: ID
    kittenID: ID
    timestamp: String
    preWeight: Float
    postWeight: Float
    amountEaten: Float
    uColor: UColor
    fConsistency: FConsistency
    fColor: FColor
    temperature: Float
  }

  type Mutation {
    createLitter(input: LitterInput): Litter
  }
`)

export default schema