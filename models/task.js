const uuid = require('uuid')

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      primaryKey: true,
      defaultValue: uuid,
      type: DataTypes.UUID
    },
    authorId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(1000)
    },
    isCompleted: {
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});

  Task.associate = function({ User }) {
    Task.belongsTo(User, {
      foreignKey: 'authorId',
      as: 'author'
    })
  };

  return Task;
};