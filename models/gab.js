'use strict';

module.exports = function(sequelize, DataTypes) {
  let gab = sequelize.define('gab', {
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return gab;
};
