const OPERATIONS = {
  MULTIPLY: 'MULTIPLY',
  DIVISION: 'DIVISION',
  PLUS: 'PLUS',
  MINUS: 'MINUS',
}

// old calculator functionality
class OldCalculator {
  operations(firstValue, secondValue, operationType) {
    switch (operationType) {
      case OPERATIONS.PLUS:
        return firstValue + secondValue
      case OPERATIONS.MINUS:
        return firstValue - secondValue
      case OPERATIONS.MULTIPLY:
        return firstValue * secondValue
      case OPERATIONS.DIVISION:
        return firstValue / secondValue
    }
  }
}

// new calculator functionality
class newCalculator {
  plus(firstValue, secondValue) {
    return firstValue + secondValue
  }
  minus(firstValue, secondValue) {
    return firstValue - secondValue
  }
  division(firstValue, secondValue) {
    return firstValue / secondValue
  }
  multiply(firstValue, secondValue) {
    return firstValue * secondValue
  }
}

// use new functionality but we are able to support old syntaxis
class AdaptedCalculator {
  constructor() {
    this.calculator = new newCalculator()
  }

  operations(firstValue, secondValue, operationType) {
    switch (operationType) {
      case OPERATIONS.PLUS:
        return this.calculator.plus(firstValue, secondValue)
      case OPERATIONS.MINUS:
        return this.calculator.minus(firstValue, secondValue)
      case OPERATIONS.MULTIPLY:
        return this.calculator.multiply(firstValue, secondValue)
      case OPERATIONS.DIVISION:
        return this.calculator.division(firstValue, secondValue)
    }
  }
}

const firstCalculator = new OldCalculator()
const secondCalculator = new newCalculator()
const thirdculator = new AdaptedCalculator()

console.log(firstCalculator.operations(10, 5, OPERATIONS.MULTIPLY))
console.log(secondCalculator.multiply(10, 5))
console.log(thirdculator.operations(10, 5, OPERATIONS.MULTIPLY))
console.log(thirdculator.calculator.multiply(10, 5))
