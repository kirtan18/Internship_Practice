const express  = require('express');
const app = express();
const morgan  = require('morgan');
const PORT = 3000;

app.use(morgan('dev'));

app.get('/employee-List' , (req,res) => {
    let result = {
        id : 1,
        name : 'employee'
    }
    res.status(200).json(result);
});

app.get('/employee-delete' , (req,res) => {
    let result = {
        id : 2,
        name : 'employee-delete'
    }
    res.status(200).json(result);
});

app.listen(PORT, () => {
    console.log(`Connection is setup at ${PORT}`);
});
