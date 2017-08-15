'use strict';

// const bcrypt = require("bcryptjs");
// const bodyParser = require("body-parser");

module.exports = function(sequelize, DataTypes) {
  let user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   set() {
    //     let salt = bcrypt.genSaltSync(10);
    //     let hash = bcrypt.hashSync(password, salt);
    //     // always want to do 'setDataValue' and then include the data type you want to change and then what you want to add
    //     this.setDataValue = ("password", hash);
    //   }
    // }
      classMethods: {
        associate: function(models) {
      //     // associations can be defined here
          models.user.hasMany(models.Gab, {foreignKey: 'gabId'});
          models.user.hasMany(models.Like, {foreignKey: 'userId'});
        }
      }
    });
  // set an instance method on this models
  // this is going to be the function that verifies whether the input password matches the existing password
  // user.prototype.auth = function(password){
  //   return bcrypt.compareSync(password, this.password);
  // }

  return user;
};
