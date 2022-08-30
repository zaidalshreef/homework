const { people } = require("./people");
const Joi = require("joi");
let identifier = 0

const schema = Joi.object({
  firstName: Joi.string().alphanum().min(4).max(15).required(),
  lastName: Joi.string().alphanum().min(4).max(15).required(),
  age: Joi.number().min(0).max(100).required(),
  city: Joi.string(),
});



module.exports.render = function(res){
    res.send(people);
}

module.exports.addPerson = function (data, res) {
  const { error, value } = schema.validate(data, { abortEarly: false });
  if (error) 
   return res.status(400).send({ error: error.message,});
    
    people.push({id:++identifier,...data});
    res.send(people);
};

module.exports.updatePerson = function (id, res) {
    const index = people.findIndex((person) => person.id === parseInt(id))
    person = people[index];
    const { error, value } = schema.validate(person, { abortEarly: false, })
  if (error)
    return res.status(400).send({ error: error.message });

  people[index] = { ...person, ...request.body }
  res.send(people);

}

module.exports.deletePerson = function (id, res) {
  const index = people.findIndex((person) => person.id === parseInt(id));
  people.splice(index, 1);
  res.send(people);
};
