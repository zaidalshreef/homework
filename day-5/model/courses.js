const mongoose = require('mongoose');
const schema = mongoose.Schema


const CoursesSchema = new schema({
    Name: {type : String, required: true},
    semester: {type: schema.Types.ObjectId,ref:"semester"},
    students: [{type: schema.Types.ObjectId,ref:"student"}],
})


CoursesSchema.static("findByName", function (name) { 
    return this.find({ Name: name})
});

module.exports = mongoose.model("course", CoursesSchema)
