const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api' , (req,res) =>{
  res.json({
    msg : 'Welcome to the API'
  });
})

function verifyToken(req,res,next) {
   //Get auth header value
   const bearerHeader = req.headers['authorization'];
   //Check if bearer is undefined
   if(typeof bearerHeader !== 'undefined'){
      // Split at the space
      const bearer = bearerHeader.split(' ');
      //Get token from array
      const bearerToken = bearer[1];
      //Set the token
      req.token = bearerToken;
      //next middleware
      next();
   }
   else{
     //Forbidden
     res.sendStatus(403);
   }
}

 
app.post('/api/post' , verifyToken , (req,res) => {
    jwt.verify(req.token,'secretkey'  ,(error,authData) =>{
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                msg: 'Post Created....',
                authData
            });
        }     
    });
   res.json({
      msg : 'Post created...'
   })
});

app.post('/api/login' , (req,res) => {
  
    const user = {
        id: 1,
        username: 'brad',
        email:'brad@gmail.com'
    }
    jwt.sign({user} , 'secretkey',{expiresIn: '30s'},(token) =>{
        res.json({
          token
        });
    });
});

app.listen(8000 , ()=> console.log('Server started on the port 8000'));

