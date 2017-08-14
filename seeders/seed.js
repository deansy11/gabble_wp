const models = require("./models");

// this is all just a sample of a seed file as per Alfonso's demo
models.user.create({
  username: "",
  password: "test",
  createdAt: Date.now(),
  updatedAt: Date.now()
})
.then(result => {
  console.log(result);
})

// This checks to make sure that the user instance created in the model file is working correctly to verify the password
models.user.find({
  where: {
    username: 'fonzilla'
  }
})
  .then(user => {
    console.log(user.auth(""));
  })

process.exit[0]
