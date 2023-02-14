const session = require('express-session');
const express = require("express");
const app = express();
app.use(session({secret: "its a secres!"}));


app.get("/" , (req,res) =>{
   if(req.session.page_views){
      req.session.page_views++;
      res.send(res.session.page_views);
   }
   else{
     res.session.page_views = 1;
     res.send("Welcome to this page for the first time!");
   }
});

app.listen(8000);
