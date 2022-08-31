const mongoose = require("mongoose");
const User = require("./user");
const Product = require("./store");
mongoose.connect("mongodb://localhost:27017/test");

const users = [
  {
    firstName: "Liam",
    lastName: "Olivia",
    birthDate: '2000-08-05',
    isMarried: true,
  },
  {
    firstName: "Noah",
    lastName: 'Emma',
    birthDate: '1995-06-09',
    isMarried: false,
  },
  {
    firstName: "Oliver",
    lastName: "Charlotte",
    birthDate: '2016-06-01',
    isMarried: true,
  },
];

const products = [ 
    {
    productName: "iphone",
    amount: 200,
    distributors: ["James","William"]
},
{
    productName: "samsung",
    amount: 210,
    distributors: ["Benjamin","Ava"]
},{
    productName: "the Art of Game Design",
    amount: 50,
    distributors: ["Benjamin","Isabella","Harper"]
}

]

async function seed() {
  await User.deleteMany({});
  await Product.deleteMany({});

  for (let us of users) {
    const user = await User.create({
      firstName: us.firstName,
      lastName: us.lastName,
      birthDate: new Date(us.birthDate) ,
      isMarried: us.isMarried,
    });
  }
  for (let produc of products) {
    const product = await Product.create({
        productName: produc.productName,
        amount: produc.amount,
        distributors: produc.distributors,
    });
  }
}

seed()