// Constructor Design Pattern

// Old way of creating
function User1(firstName, secondName, age, gender) {
  this.firstName = firstName
  this.secondName = secondName
  this.age = age
  this.gender = gender
}

User1.prototype.getUserInfo = function () {
  console.log(
    `user name ${this.firstName} ${this.secondName}, ${this.age} years old `,
  )
}

// new way of creating
class User2 {
  constructor(firstName, secondName, age, gender) {
    this.firstName = firstName
    this.secondName = secondName
    this.age = age
    this.gender = gender
  }

  getUserInfo() {
    console.log(
      `user name ${this.firstName} ${this.secondName}, ${this.age} years old `,
    )
  }
}

const July = new User1('July', 'Doe', 23, 'female')
const John = new User2('John', 'Doe', 25, 'male')

July.getUserInfo()
John.getUserInfo()
