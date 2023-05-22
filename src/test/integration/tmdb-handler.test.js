import supertest from "supertest";
import { jest } from '@jest/globals';
import app from "../../../server.js";
import AxiosHttpClient from "../../configs/axios.js";
import * as Outputs from "../mocks/tmdb-service/outputs.js"
import * as Inputs from "../mocks/tmdb-service/inputs.js"

const axiosGet = jest.spyOn(AxiosHttpClient, 'getTmdb');

describe("/tmdb/movie/search", () => {
    it("should search a film name and return 200", async () => {
        axiosGet.mockResolvedValueOnce(Outputs.searchMovieByName.success);
        const response = await supertest
            .agent(app)
            .get('/tmdb/movie/search')
            .query({name: 'homem-aranha'})
            .expect(200);
        expect(response.body.data).toMatchObject(Outputs.searchMovieByName.success.data);
    });
});

describe("/tmdb/movie/{id}", () => {
    const { incorrect } = Inputs.getMovieDetails;
    it("should return 404 for incorrect entry - negative number", async () => {
        for(let i = 0; i < 6; i++)
            axiosGet.mockRejectedValueOnce(Outputs.getMovieDetails.failed);

        const response = await supertest
            .agent(app)
            .get(`/tmdb/movie/${incorrect.negativeNumber}`)
            .expect(404);
    })
});
