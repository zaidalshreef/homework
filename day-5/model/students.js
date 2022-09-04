const mongoose = require("mongoose");
const schema = mongoose.Schema;





const StudentSchema = schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  courses: [
    { mark: Number, course: { type: schema.Types.ObjectId, ref: "course" }},
  ],
});

StudentSchema.virtual('courses', {
  ref: 'course',
  localField: '_id',
  foreignField: 'author'
});

StudentSchema.static("findByName", function (firstname, lastname) {
  return this.find({ firstName: firstname, lastName: lastname });
});

module.exports = mongoose.model("student", StudentSchema);

