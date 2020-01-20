const express = require('express'); 
const app = express(); 

app.use(express.static(__dirname + '/public')); //loads an static asset

app.listen(3000);