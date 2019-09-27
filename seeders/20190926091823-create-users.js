const  { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const id = '9ce9fb8b-3cf4-4504-806c-1245165b4179'
    await User.create({
      
      id,
     name: 'Nils Goecke',
     email: 'nils@goecke.de',
     password: 'password',
     avatar: '//www.gravatar.com/avatar/39b55aadbb05c81c2db110970d88f7fb?s=200&r=pg&d=mm'
    })
  },

  down: (queryInterface, Sequelize) => {
  }
};
