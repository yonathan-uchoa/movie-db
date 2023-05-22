import tmdbHttpClient from './axios-create.js';

class AxiosHttpClient {

    static async getTmdb(path, params = {}, headers = {}, ){
        return tmdbHttpClient.get(path, { params }, { headers });
    }

    static async postTmdb(path, headers = {}){
        return tmdbHttpClient.post(path, { headers });
    }
    
    static async putTmdb(path, headers = {}){
        return tmdbHttpClient.put(path, { headers });
    }

    static async patchTmdb(path, headers = {}){
        return tmdbHttpClient.patch(path, { headers });
    }

    static async deleteTmdb(path, headers = {}){
        return tmdbHttpClient.delete(path, { headers });
    }
}

export default AxiosHttpClient;
