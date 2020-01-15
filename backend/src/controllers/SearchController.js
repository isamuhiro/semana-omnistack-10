const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    }

}

