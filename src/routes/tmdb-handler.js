import express from 'express';

const app = express.Router();


/**
 * @swagger
 * /tmdb/search:
 *   post:
 *     description: Creates a food item
 *     tags: [TMDB]
 *     produces:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *     responses:
 *       200:
 *         description: Created
 */
app.get('/search', async (req, res) => {
    const { name } = req.body;
    // const response = await TmdbService.getMovie(name);
});

export default app;