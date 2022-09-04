const mongoose = require("mongoose");
const schema = mongoose.Schema;





const StudentSchema = new schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  courses: [
    { mark: {type: Number , default: 0}
    ,Course: { type: schema.Types.ObjectId, ref: "course" }},
  ],
});



StudentSchema.static("findByName", function (firstname, lastname) {
  return this.find({ firstName: firstname, lastName: lastname });
});

module.exports = mongoose.model("student", StudentSchema);

