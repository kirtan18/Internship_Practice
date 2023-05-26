const express = require('express');
const fetch = require('node-fetch');
const nodecache = require('node-cache');
const myCache = new nodecache({ stdTTL: 10 });
const app = express();
const PORT = 8000;

const todosURL = "https://jsonplaceholder.typicode.com/todos";

app.get("/todos", (req, res) => {
    if (myCache.has("todos")) {
        console.log("Getting it from cache");
        return res.send(myCache.get("todos"));
    }
    else {
        fetch(todosURL)
            .then((res) => res.json())
            .then((json) => {
                myCache.set("todos", json);
                console.log("Getting it from URL");
                res.send(json);
        });
    }
});

app.get("/stats" , (req,res) => {
    res.send(myCache.getStats());
});

app.listen(PORT, () => {
    console.log("Example server running!");
})