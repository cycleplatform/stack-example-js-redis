
const Redis = require('ioredis');
const fs = require('fs');
const express = require("express");

const client = new Redis({
    host: 'redis',
    port: 6379, 
    family: 6
    
});
const app = express();
client.set("visits", 0);
PORT = 80;

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(PORT, () => {
  console.log(`listening ${PORT}`);
});
