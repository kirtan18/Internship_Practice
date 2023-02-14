const Employee = require('../models/Employee');

// Show the list of Employee
const index = (req, res, next) => {
    try {
        Employee.find((err, result) => {
            if (err) {
                console.log(err);
            }
            res.json(result);
        });
    }
    catch (error) {
        res.json('An Error Occured!');
    }
}

//Show single employee
const show = (req, res, next) => {
    try {
        let employeeID = req.body.employeeID;
        Employee.findById(employeeID, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result._id.toString());
            res.json(result);
        })
    }
    catch (error) {
        res.json('An Error Occured!');
    }
}

//Add new Employee
const store = (req, res, next) => {
    try {
        let employee = new Employee({
            name: req.body.name,
            designation: req.body.designation,
            email: req.body.email,
            phone: req.body.phone,
            age: req.body.age,
            time: req.body.time.toString(),
            marks: req.body.marks
        });
        employee.save((err,result) => {
            if (err) {
                res.status(400).send(err);
            }
            res.json(result);
        });
    }
    catch (error) {
        res.json('Error Occured!');
    }
}

// Update an Employee
const update = (req, res, next) => {
    try {
        let employeeID = req.body.employeeID
        let updateData = {
            name: req.body.name,
            designation: req.body.designation,
            email: req.body.email,
            phone: req.body.phone,
            age: req.body.age
        }

        Employee.findByIdAndUpdate(employeeID, { $set: updateData }, (err) => {
            if (err) {
                console.log(err);
            }
            res.json('Employee Updated successfully!');
        })
    }
    catch (error) {
        res.json('Error Occured!');
    }
}

//Delete an Employee
const destroy = (req, res, next) => {
    try {
        let employeeID = req.body.employeeID;
        Employee.findOneAndRemove(employeeID, (err) =>{
            if (err) {
                console.log(err);
            }
            res.json('Employee deleted Successfully!');
        });
    }
    catch (error) {
        res.json('An Error Occured!');
    }
}

module.exports = {
    index, show, store, update, destroy
}





