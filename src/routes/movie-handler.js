import express from 'express'
import Movie from '../models/movie.js';

const app = express.Router();

/** Movie definition
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - name
 *         - rating
 *       properties:
 *         name:
 *           type: string
 *         rating:
 *           type: integer
 *     MovieUpdate:
 *       type: object
 *       required:
 *         - name
 *         - rating
 *       properties:
 *         name:
 *           type: string
 *         rating:
 *           type: integer
 */

/**
 * @swagger
 * /movie:
 *   get:
 *     description: Returns the list of all the books
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: hi!
 */
app.get('/', (req, res) => {
    res.send('hi!');
});

/**
 * @swagger
 * /movie/save:
 *  post:
 *    summary: Save a new movie to the database.
 *    tags: [Movies]
 *    produces: 
 *      - application/json
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Movie'
 *    responses:
 *      200:
 *        description: movie has been saved successfully
 */
app.post('/save', async (req, res) => {
    const id = Math.floor(Math.random()*500);
    let { name, rating } = req.body;
    if(!rating)
        rating = 'no availation';
    
    const response = await Movie.insertMovie({name, rating, id});
    res.status(200).send({message: 'movie has been saved successfully!', data: {name, rating, id}});

});

/**
 * @swagger
 * /movie/{id}: 
 *   get:
 *     summary: search a Movie by id.
 *     tags: [Movies]
 *     produces: 
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *     responses:
 *       200:
 *         description: The movie description by id
 *       404:
 *         description: The movie was not found
 */
app.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    const response = await Movie.findOneUser(+id);
    if(response)
        res.status(200).send({message: 'success', data: {id: response.id, name: response.name, rating: response.rating}});
    else
        res.status(404).send({message: 'id movie not found!,', data: {id: +id}})

});

/**
 * @swagger
 * /movie/{id}:
 *   delete:
 *     summary: delete a Movie by id.
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *     responses:
 *       200:
 *         description: The movie has been deleted
 *       404:
 *         description: The movie was not found
 */
app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    
    const { deletedCount: response } = await Movie.deleteOne({ id: +id })
    if(response)
        res.status(200).send({message: 'movie has been deleted successfully!', data: {}});
    else
        res.status(404).send({message: 'movie was not found!', data: {id: +id}});

});

/**
 * @swagger
 * /movie/{id}:
 *   put:
 *     summary: search a Movie by id.
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name: 
 *                  type: string
 *                rating:
 *                  type: integer
 *     responses:
 *       200:
 *         description: The movie has been updated
 *       404:
 *         description: The movie was not found
 */
app.put('/:id', async (req, res) => {
    const { name, rating } = req.body;
    const { id } = req.params;
    
    const response = await Movie.updateMovie(+id, {name, rating});
    if(response.modifiedCount)
        res.status(200).send({message: 'movie has been updated successfully!', data: {}});
    else
        res.status(404).send({message: 'movie was not found!', data: {id: +id}});

});



export default app;
