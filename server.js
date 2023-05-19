import dotenv from 'dotenv';;
import express from 'express';
import swaggerUI from 'swagger-ui-express'
import MovieHandler from './src/routes/movie-handler.js';
import specs from './src/configs/swagger-conf.js'
import initServer from './src/database/mongodb-test.js';

dotenv.config({path: `env/.env`});
const PORT = process.env.SERVER_PORT || 3000;


initServer();
const app = express();

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(express.json());

app.use("/movie", MovieHandler);

app.listen(PORT, () => {
    console.log(`app listen at ${PORT}`);
});
