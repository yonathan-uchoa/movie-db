import AxiosHttpClient from "../configs/axios.js";

class TmdbService {
    static async searchMovieByName(query, language = 'en-US', page = 1, include_adult = false) {
        const params = new URLSearchParams({
            language,
            include_adult,
            page
        });
        if(query)
            params.append('query', query);
        try {
            const response = await AxiosHttpClient.getTmdb('/3/search/movie', params);
            return response;
        } catch (err){
            return { status: err?.status, data: err?.message };
        }

    }

    static async getMovieDetails(movieId){
        try{
            const response = await AxiosHttpClient.getTmdb(`/3/movie/${movieId}`);
            return response;
        } catch (err){
            return { status: err?.status, data: err?.message };
        }
    }
}

export default TmdbService;