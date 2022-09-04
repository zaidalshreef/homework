const Courses = require("../model/courses");
const students = require("../model/students");
const Students = require("../model/students");

module.exports.index = async (req, res, next) => {
  const students = await Students.find({}).populate("courses.Course");
  res.send(students);
};

module.exports.show = async (req, res, next) => {
  const student = await Students.findById(req.params.id).populate("courses");
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
  const student = await Students.findById(req.params.id);
  const courses = await Courses.findOneAndUpdate(
    { Name: req.body.course },
    { $push: { students: student } }
  );
  const markStudent = await Students.findByIdAndUpdate(req.params.id, {
    $push: { courses: { mark: 0, Course: courses } },
  }).populate("courses.Course");

  await markStudent.save();

  res.send(markStudent);
};

module.exports.addMark = async (req, res, next) => {
  const student = await Students.findById(req.params.id).populate("courses.Course");
  const index = student.courses.findIndex(
    (markcourse) => markcourse.Course.Name === req.params.course
  );

  student.courses[index].mark = req.body.mark;
  await student.save();

  res.send(student);
};
