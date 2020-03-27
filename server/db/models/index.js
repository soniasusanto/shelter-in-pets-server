const User = require('./user')
const Dog = require('./dog')
const LikedDogs = require('./liked_dogs')
const ViewedDogs = require('./viewed_dogs')
const UploadedBreeds = require('./uploaded_breeds')

Dog.belongsToMany(User, {through: LikedDogs, as: 'likedUser'})
User.belongsToMany(Dog, {through: LikedDogs, as: 'likedDog'})

Dog.belongsToMany(User, {through: ViewedDogs, as: 'viewedUser'})
User.belongsToMany(Dog, {through: ViewedDogs, as: 'viewedDog'})

User.hasMany(UploadedBreeds)
UploadedBreeds.belongsTo(User)

module.exports = {User, Dog, UploadedBreeds}
