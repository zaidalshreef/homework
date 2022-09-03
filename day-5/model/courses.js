const mongoose = require('mongoose');
const schema = mongoose.Schema


const CoursesSchema = schema({
    Name: {type : String, required: true},
    semester: {type: schema.Types.ObjectId,ref:"semester"},
    marks: [{mark : Number, course: {type: schema.Types.ObjectId,ref:"student"}}],
    students: [{type: schema.Types.ObjectId,ref:"student"}],
})

module.exports = mongoose.model('course', CoursesSchema)
