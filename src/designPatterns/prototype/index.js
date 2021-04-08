const User = {
  name: 'Vitaliy',
  age: 29,
  gender: 'male',
}

const Admin = Object.create(User, {
  isAdmin: {
    value: true,
  },
})

console.log(Admin.__proto__ === User)
