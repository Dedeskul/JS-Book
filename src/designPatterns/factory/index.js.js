// Factory Design Pattern

const SUBSCRIPTION = {
  SIMPLE: 'simple',
  STANDART: 'standart',
  PREMIUM: 'premium',
}

// Creating types of subscription
class SimpleSubscription {
  constructor(name) {
    this.name = name
    this.price = 50
  }
}

class StandartSubscription {
  constructor(name) {
    this.name = name
    this.price = 150
  }
}

class PremiumSubscription {
  constructor(name) {
    this.name = name
    this.price = 500
  }
}

// Creating factory and all methods
class MemberFactory {
  static list = {
    simple: SimpleSubscription,
    standart: StandartSubscription,
    premium: PremiumSubscription,
  }

  create(name, type = SUBSCRIPTION.SIMPLE) {
    const MemberShip = MemberFactory.list[type]
    const member = new MemberShip(name)
    return member
  }
}

// Create instance of MemberFactory
const factory = new MemberFactory()

// Creating new members
const members = [
  factory.create('Vasiliy', SUBSCRIPTION.SIMPLE),
  factory.create('Dmitriy', SUBSCRIPTION.PREMIUM),
  factory.create('Petr', SUBSCRIPTION.STANDART),
  factory.create('Ivan'),
]

console.log(members)
