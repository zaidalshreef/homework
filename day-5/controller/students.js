const Courses = require("../model/courses");
const Students = require("../model/students");

module.exports.index = async (req, res, next) => {
  const students = await Students.find({})
  res.send(students);
};

module.exports.show = async (req, res, next) => {
  const student = await Students.findById(req.params.id).populate("courses")
  res.send(student);
};


module.exports.create = async (req, res, next) => {
  const student = await Students.create({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
  });

  res.send(student);
};

module.exports.addCourses = async (req, res, next) => {
  const student = await Students.findById(req.params.id)
  const courses = await req.body.courses.map(async (course) => {
    return  await Courses.findOneAndUpdate({Name:course},{$push:{students : student}})
  }) 
  student.courses = [...courses,...student.courses]


    await student.save()
  
    res.send(student);
  };
  

  module.exports.addMark = async (req, res, next) => {
    const student = await Students.findById(req.params.id).populate("courses")
    const index =  student.courses.findIndex( (markcourse) =>  markcourse.course.name == req.params.course) 

    student.courses[index].mark = req.body.mark 
    await student.save()

    res.send(student);
  };
  