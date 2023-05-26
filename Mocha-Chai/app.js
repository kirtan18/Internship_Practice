const express = require('express');
const app = express();
const PORT = 8000;

app.use('/user' , require('./routes/users'));

module.exports = app.listen(PORT ,()=>{
    console.log(`App is listening ar PORT ${PORT}`);
})