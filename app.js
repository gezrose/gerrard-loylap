const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the LoyLap app on ElasticBeanstalk version 1!");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Wazzappppp");
});
