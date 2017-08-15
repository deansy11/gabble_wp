"use strict"

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "gabs",
      [
        // trying to create gab ids and connect them with specific user ids
        {
          description: "Ate soooooo many tacos today. Tacocat forever.",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        }, {
          description: "Pokemon Snap 4ever.",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
      }, {
          description: "Do you even TDD, bro?",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
      }
      ]
    )
  }
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("gabs", null, {});
  }
};
