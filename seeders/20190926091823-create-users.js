const  { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await User.create({
      firstName: 'John',
      lastName: 'Doe'
    })

    await User.create({
      firstName: 'John',
      lastName: 'Doe'
    })
  },

  down: (queryInterface, Sequelize) => {
  }
};
