const express = require('express');

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    console.log(request.query)
    return response.json({ message: 'Hello World' });
});

app.post('/users', (request, response) => {
    request.body.json;
    return response.json({ message: 'Hello World' });
});

app.put('/users', (request, response) => {
    return response.json({ message: 'Hello World' });
});

app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.status(202).json({ message: 'User deleted successfully' });
});



app.listen(3333);

