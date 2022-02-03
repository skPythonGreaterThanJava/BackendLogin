const express = require('express');
const fs = require("fs");
const app = express();

const port = 3000;
const host = 'localhost';
app.listen(port, host, ()=>{
    console.log('Server running at http://%s:%d', host, port);
});

app.get('/page', (request, response)=>{
    response.sendFile('/frontend/index.html');
});

app.post('/page', (request, response)=>{
    var other = {"username" : request.body.username, "password" : request.body.password};
    fs.readFile("users.json", (err, data) => {
        if(err) response.status(400);
        else {
            var students = JSON.parse(data);
            students.push(other);
            fs.writeFile("users.json", JSON.stringify(students), (err)=>{
                if(err) response.status(400);
                else response.status(200);
            });
        }
    });
        
});

app.put('/page', (request, response)=>{
    fs.readFile("users.json", (err, data)=>{
        if(err) console.log(err);
        else {
            var students = JSON.parse(data);
            students.forEach(element => {
                if (element.username == request.body.username && element.password == request.body.password) {
                    response.status(200);
                    //response.send();
                } else response.status(400);
            });
        } 
    })
});