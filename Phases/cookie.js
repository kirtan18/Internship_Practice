const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();
app.use(cookieParser());



app.get("/" , (req,res) =>{
   res.cookie('name','xyz').send('cookie set');
   console.log(req.cookies);
});

app.listen(8000);