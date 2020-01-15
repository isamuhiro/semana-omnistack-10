const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringToArray = require('../models/utils/parseStringToArray')

module.exports = {
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const techsArray = parseStringToArray(techs);
            try {
                const response = await axios.get(`https://api.github.com/users/${github_username}`);
                const { name = login, login, avatar_url, bio } = response.data;

                const location = {
                    type: 'Point',
                    coordinates: [longitude, latitude]
                };

                try {
                    dev = await Dev.create({
                        github_username,
                        name,
                        login,
                        avatar_url,
                        bio,
                        techs: techsArray,
                        location
                    });

                } catch (error) {
                    return res.status(400).json({ error, location })
                }
            } catch (error) {
                return res.status(400).json({ error: `It was not possible to find the user called  ${github_username}` });
            }


        }

        return res.json(dev);

    },

    async index(req, res) {
        const response = await Dev.find();
        try {
            return res.json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    async show(req, res) {
        const github_username = req.params.github_username;
        const response = await Dev.find({ github_username });

        try {
            return res.json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    async update(req, res) {

    }

}

