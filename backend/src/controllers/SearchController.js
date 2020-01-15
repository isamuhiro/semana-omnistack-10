// const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringToArray = require('../models/utils/parseStringToArray')


module.exports = {
    async index(req, res) {
        let { latitude, longitude, techs } = req.query;
        
        techs = parseStringToArray(techs);

        // return res.json(techs);
        const devs = await Dev.find({
            techs: {
                $in: techs
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });

        return res.json(devs);
    }

}

