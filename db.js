const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://TodoCrudAppUser:Test1234@cluster0.y8phh.mongodb.net/NoodleBook?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    module.exports = client.db();
    const app = require("./app");
    app.listen(3000);
  }
);
