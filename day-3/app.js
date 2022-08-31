const express = require("express");
const app = express();
const { addPerson, updatePerson, deletePerson,render } = require("./service");
const port = 3000;



app.use(express.json());

app.get("/people",render);

app.post("/people", addPerson);

app.put("/people/:id", updatePerson);

app.delete("/people/:id",deletePerson);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
