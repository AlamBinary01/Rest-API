const db = require("./database/databaseConnection");
const Logins = require("./Models/auth");
const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/addStudent", (req, res) => {
  Logins.create({ username: req.body.username, password: req.body.password })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send({ message: error.message || "some error occured" });
    });
  console.log(req.result);
});
app.delete("/deleteStudent/:id", async (req, result) => {
  console.log(req.params.id);
  await Logins.destroy({
    where: {
      id: parseInt(req.params.id),
    },
  })
    .then((result) => {
      res.send("kam paygaya").status(200);
    })
    .catch((error) => {
      console.log("nai kaam hua");
    });
});
app.get("/showAllData", (req, res) => {
  try {
    Logins.findAll().then((result) => {
      res.json(result);
    });
  } catch (error) {
    console.error("Failed to retrive data:", error);
  }
});

app.listen(8080, () => console.log("App listening on port 8080!"));
