const express = require('express');
const app = express();

const PORT = 3333;
const sendMail = require('./controller/sendMail');

app.get('/' , (req,res) => {
   res.send("hello nodeEmailer");
});

app.get('/mail' , sendMail);

app.listen(PORT, ()=> {
    console.log(`Listening on Port: ${PORT}`);
});