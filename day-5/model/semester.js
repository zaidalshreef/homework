const mongoose = require('mongoose');
const schema = mongoose.Schema


const SemesterSchema = new schema({
    name: {type : String, required: true,enum: ["first", "second","third"]},
    courses: [{type: schema.Types.ObjectId,ref:"course"}]
})


module.exports = mongoose.model("semester", SemesterSchema)
