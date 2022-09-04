const Courses = require("../model/courses");
const Semester = require("../model/semester");

module.exports.index = async (req, res, next) => {
  const courses = await Courses.find({}).populate(["semester", "students"]);
  res.send(courses);
};

module.exports.show = async (req, res, next) => {
  const course = await Courses.findByName(req.params.course).populate([
    "semester",
    "students",
  ]);

  res.send(course);
};

module.exports.create = async (req, res) => {
  const course = await Courses.create({
    Name: req.body.name,
  });

  res.send(course);
};

module.exports.update = async (req, res, next) => {
  const course = await Courses.findByName(req.params.course)
  const semester = await Semester.findOneAndUpdate(
    { name: req.body.semester },
    { $push: { courses: course } }
  );

  await semester.save();

  res.send(course);
};
