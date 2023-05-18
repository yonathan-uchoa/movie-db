import dotenv from 'dotenv';
import { app } from './src/rest-server.js'
dotenv.config({path: `env/.env`})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`app listen at ${process.env.SERVER_PORT}`);
})
