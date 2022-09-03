const Semester = require("../model/semester");

module.exports.index = async (req, res, next) => {
  const semesters = await Semester.find({}).populate("courses");
  res.send(semesters);
};

module.exports.show = async (req, res, next) => {
  const semester = await Semester.find({ name: req.params.semester }).populate(
    "courses"
  );

  res.send(semester);
};

module.exports.create = async (req, res, next) => {
  const semester = await Semester.create({
    name: req.body.name,
  });

  res.send(semester);
};
