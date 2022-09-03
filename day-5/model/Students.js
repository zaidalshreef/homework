const mongoose = require('mongoose');
const schema = mongoose.Schema


const StudentSchema = schema({
    firstName: {type : String, required: true},
    lastName: {type : String, required: true},
    marks: [{mark : Number, course: {type: schema.Types.ObjectId,ref:"courses"}}],
    courses: [{type: schema.Types.ObjectId,ref:"courses"}]
})

module.exports = mongoose.model('student', StudentSchema)
