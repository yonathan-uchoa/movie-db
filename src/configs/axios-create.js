import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({path: `env/.env`});


const TOKEN = process.env.TMDB_TOKEN;
const URL = process.env.TMDB_BASE_URL;

const tmdbHttpClient = axios.create({
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    timeout: 30000,
    baseURL: URL
  });

export default tmdbHttpClient;