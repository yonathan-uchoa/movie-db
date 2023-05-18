import dotenv from 'dotenv';
import swaggerJsDoc from 'swagger-jsdoc';

dotenv.config({path: `env/.env`});

const PORT = process.env.SERVER_PORT || 3000;

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Movie DB API",
            version: "0.1.0",
            description: "TMDB routing API"
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            }
        ]        
    },
    apis: ["**/routes/*.js"],
};

const specs = swaggerJsDoc(options);

export default specs;

