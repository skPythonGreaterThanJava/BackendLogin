const express = require('express');
const app = express();

const port = 3000;
const host = 'localhost';
app.listen(port, host, ()=>{
    console.log('Server running at http://%s:%d', host, port);
});

app.get('/page', (request, response)=>{
    response.send('frontend/index.html');
});

app.post('/page', ()=>{
    
});

app.put('/page')