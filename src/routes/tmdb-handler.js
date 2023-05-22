import express from 'express';
import TmdbService from '../services/tmdb-service.js';
const app = express.Router();

/**
 * @swagger
 * /tmdb/movie/search:
 *   get:
 *     description: Search a movie by name
 *     tags: [TMDB]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: The movie name
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: The movie id
 *     responses:
 *       200:
 *         description: Created
 */
app.get('/movie/search', async (req, res) => {
    const { name, page } = req.query;

    let language = [undefined]
    language = req.headers['accept-language'].split(',');
    
    const response = await TmdbService.searchMovieByName(name, language[0], page);
    res.status(response.status).send({data: response.data});
});

/**
 * @swagger
 * /tmdb/movie/{id}:
 *   get:
 *     description: Search a movie by name
 *     tags: [TMDB]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: The movie id
 *         required: true
 *     responses:
 *       200:
 *         description: Created
 */
app.get('/movie/:id', async (req, res) => {
    const { id } = req.params;
    const response = await TmdbService.getMovieDetails(id);
    res.status(response.status).send({data: response.data});
});

export default app;