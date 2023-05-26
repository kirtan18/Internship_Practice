const express = require('express');
const redis  = require('redis');
// const redisUrl = "redis://127.0.0.1:6379";
const util = require("util");
const axios = require('axios');
const client = redis.createClient({
    legacyMode: true,
    PORT: 6379,
    socket: {
        connectTimeout: 50000,
      },
  });
client.connect().catch(console.error)

client.set = util.promisify(client.set);
client.get = util.promisify(client.get);

const app = express();
app.use(express.json()); 

app.post("/redis", async(req,res) => {
    const { key, value } = req.body;
    const response = await client.set(key,value);
    res.json(response);
});

app.get("/Get", async(req,res) => {
    const { key } = req.body;
    const value = await client.get(key);
    res.json(value);
});

app.get("/posts/:id", async(req,res) => {
    const { id } = req.params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${ id }`);
    return res.json(response.data);
})

app.listen(8080,()=>{
    console.log('Now listining on port 8080');
});