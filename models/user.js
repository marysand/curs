 // 1
 var mongoose = require('mongoose');

 module.exports = mongoose.model('User',{
         username: String,
     password: String,
     email: String,
     gender: String,
     address: String
 });



const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

// 2


// 4
const User = mongoose.model('user', userSchema)
module.exports = User


module.exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  } catch(error) {
    throw new Error('Hashing failed', error)
  }
}
