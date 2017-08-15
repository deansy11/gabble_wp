"use strict"

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "likes",
      [{
        id: 1,
        like: true,
        username: "sunnyncher",
        password: "hello",
        createdAt: new Date(),
        updatedAt: new Date()
      }]
    )
  }
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("likes", null, {});
  }
};
