const express  = require('express');
const app = express();
const morgan  = require('morgan');
const PORT = 8000;

app.use(morgan('dev'));

app.get('/user-List' , (req,res) => {
    let result = {
        id : 1,
        name : 'first'
    }
    res.status(200).json(result);
});

app.get('/user-delete' , (req,res) => {
    let result = {
        id : 2,
        name : 'Second-restart'
    }
    res.status(200).json(result);
});

app.listen(PORT, () => {
    console.log(`Connection is setup at ${PORT}`);
});
