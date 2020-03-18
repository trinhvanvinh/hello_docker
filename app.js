/**
 * Created by trinh on 3/15/2020.
 */


const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("Hello from Docker!");
})

app.listen(3001, function () {
   console.log('on listening port 3001');
});