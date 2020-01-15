const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router();
/**
 * Devs
 */
routes.get('/devs', DevController.index);
routes.get('/devs/:github_username', DevController.show);
routes.post('/devs', DevController.store);

/**
 * Search
 */

routes.get('/search', SearchController.index);

module.exports = routes;
