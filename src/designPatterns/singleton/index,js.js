class DataBase {
  constructor(data) {
    if (DataBase.exists) {
      return DataBase.instance
    }
    DataBase.instance = this
    DataBase.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
}

const mongo = new DataBase('mongoDB')
const mySQL = new DataBase('MySQL')

console.log(mongo.getData()) // returns mongoDB
console.log(mySQL.getData()) // returns mongoDB because DataBase creates using one instance 
