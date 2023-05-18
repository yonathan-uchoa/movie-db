import express from 'express'

const app = express.Router();

/**
 * @swagger
 * /movie:
 *   get:
 *     description: Returns the list of all the books
 *     responses:
 *       200:
 *         description: hi!
 */
app.get('/', (req, res) => {
    res.send('hi!')
});

export default app;
