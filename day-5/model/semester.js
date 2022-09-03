const mongoose = require('mongoose');
const schema = mongoose.Schema


const SemesterSchema = schema({
    name: {type : String, required: true,enum: ['first', 'second','third']},
    courses: [{type: schema.Types.ObjectId,ref:"courses"}]
})


module.exports = mongoose.model('semester', SemesterSchema)
