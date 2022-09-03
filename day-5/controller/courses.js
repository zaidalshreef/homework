const Courses = require("../model/courses");
const Semester = require("../model/semesters");

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

module.exports.create = async (req, res, next) => {
  const course = await Courses.create({
    name: req.body.name,
  });

  res.send(course);
};

module.exports.update = async (req, res, next) => {
    const semester = await Semester.find({name:req.body.semester})
    const course = await Courses.findByName(req.params.course).populate([
        "semester",
        "students",]
    )
    course.semester = semester
    semester.courses.push(course)

    await course.save()
    await Semester.save()
  
    res.send(course);
  };
  