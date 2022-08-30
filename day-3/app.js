const express = require("express");
const app = express();
const { addPerson, updatePerson, deletePerson,render } = require("./service");
const port = 3000;



app.use(express.json());

app.get("/people", (req, res) => {
  render(res);
});

app.post("/people", (req, res) => {
    addPerson(req.body,res);
});

app.put("/people/:id", (req, res) => {
  updatePerson(req,res);
});

app.delete("/people/:id", (req, res) => {
  deletePerson(req.params.id,res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
