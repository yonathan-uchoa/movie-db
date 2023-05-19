import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

const PORT = +process.env.DB_PORT || 3940;

async function initServer() {
    const mongod = await MongoMemoryServer.create({ instance: { port: PORT, dbName: 'movies' } });
    mongoose.connect(`mongodb://localhost:${PORT}/movies`);
    return mongod;
}
export default initServer;