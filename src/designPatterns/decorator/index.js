// Decorator Design Pattern

class Car {
  constructor(brand, color, price, mileAge, bodyNumber) {
    this.brand = brand
    this.color = color
    this.price = price
    this.mileAge = mileAge
    this._bodyNumber = bodyNumber
  }

  get bodyNumber() {
    return this._bodyNumber
  }
}

function prepareCarFullINfo(car) {
  car.isNew = !car.mileAge ? true : false
  car.getFullInfo = function () {
    return `brand: ${car.brand}, color: ${car.color}, mileAge: ${car.mileAge} km, price: ${car.price}$`
  }

  return car
}

const AUDI = prepareCarFullINfo(
  new Car('AUDI', 'Black', 20_000, 165_000, 'fSecure_12345'),
)

const Tesla = prepareCarFullINfo(
  new Car('Tesla', 'Blue', 50_000, 0, 'fSecure_tesla5'),
)

const BMW = prepareCarFullINfo(
  new Car('BMW', 'White', 30_000, 0, 'fSecure_12345'),
)

console.log(AUDI.getFullInfo())
console.log(BMW.getFullInfo())
console.log(Tesla.getFullInfo())
