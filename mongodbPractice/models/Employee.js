const mongoose = require('mongoose');
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name:{
        type: String
    },
    designation: {
        type: String
    },
    email:{
        type:String
    },
    phone:{
        type: String
    },
    age:{
        type    : Number,
        required: true,
        min: [18, 'Age must be 18 or above']
    },
    time:{
        type: Date
    },
    marks: {
        value :[ {type: String} ]
    }, 
}, {timestamps: true});

const Employee = mongoose.model('Employee',employeeSchema);
module.exports = Employee;