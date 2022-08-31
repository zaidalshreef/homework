const people  = require("./people");
const Joi = require("joi");
let identifier = 0

const schema = Joi.object({
  firstName: Joi.string().alphanum().min(4).max(15).required(),
  lastName: Joi.string().alphanum().min(4).max(15).required(),
  age: Joi.number().min(0).max(100).required(),
  city: Joi.string(),
});



module.exports.render = function(req,res){
    res.send(people);
}

module.exports.addPerson = function (req, res) {
  const { error, value } = schema.validate(req.body, { abortEarly: false });
  if (error) 
   return res.status(400).send({ error: error.message,});
    
    people.push({id:++identifier,...req.body});
    res.send(people);
};

module.exports.updatePerson = function (req, res) {
    try {
        const index = people.findIndex((person) => person.id === parseInt(req.params.id))
        const {firstName,lastName,age,city} = people[index]
        const { error, value } = schema.validate({firstName,lastName,age,city,...req.body}, { abortEarly: false, })
        if (error)
        return res.status(400).send({ error: error.message });
    
      people[index] = { ...people[index], ...req.body }
      res.send(people);
    } catch (error) {
        res.status(404).send({ error: "Not Found" });
    }
   

}

module.exports.deletePerson = function (req, res) {
    try {
        const index = people.findIndex((person) => person.id === parseInt(req.params.id))
        if(!index) throw new Error;
        people.splice(index, 1);
        res.send(people);
    } catch (error){
    res.status(404).send({ error: "Not Found" });
}
  
}
