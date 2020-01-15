const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.get('/devs', (request, response) => {
    console.log(request.query)
    return response.json({ message: 'Hello World' });
});

routes.post('/devs', async (req, res) => {
    const { github_username, techs, latitude, longitude } = req.body;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const response = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, login, avatar_url, bio } = response.data;

    
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    };

    try {
        const dev = await Dev.create({
            github_username,
            name, 
            login,
            avatar_url,
            bio,
            techs: techsArray,
            location
        });

        return res.json(dev);

    } catch (error) {
        return res.status(400).json({error, location})
    }

});

routes.put('/devs', (request, response) => {
    return response.json({ message: 'Hello World' });
});

routes.delete('/devs/:id', (request, response) => {
    console.log(request.params);
    return response.status(202).json({ message: 'User deleted successfully' });
});

module.exports = routes;
