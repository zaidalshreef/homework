const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to My first homework with node.js");
});

app.get("/user", (req, res) => {
  res.send("my name is zaid i live in Riyadh ");
});
app.get("/cats", (req, res) => {
  res.send(`
    <div>
     <img style="width:400px;height:200px;display: inline" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"/>
     <img style="width:400px;height:200px;display: inline" src="https://static01.nyt.com/images/2021/08/17/science/28cats1/28cats1-superJumbo.jpg"/>
     </div>
     <div>
     <img style="width:400px;height:200px;display: inline" src="https://media.wired.com/photos/5e1e646743940d0008009167/2:1/w_2298,h_1149,c_limit/Science_Cats-84873657.jpg     "/>
     <img style="width:400px;height:200px;display: inline" src="https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg     "/>
     </div>
     `);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
