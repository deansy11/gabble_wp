'use strict';

module.exports = function(sequelize, DataTypes) {
  var like = sequelize.define('like', {
    like: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.like.belongsTo(models.User, {foreignKey: 'userId'});
        models.like.belongsTo(models.Gab, {foreignKey: 'gabId'});
      }
    }
  });
  return like;
};
