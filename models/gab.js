'use strict';

module.exports = function(sequelize, DataTypes) {
  let gab = sequelize.define('gab', {
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.gab.hasMany(models.like, {foreignKey: 'likeId'});
        models.gab.belongsTo(models.user, {foreignKey: 'userId'});
      }
    }
  });
  return gab;
};
