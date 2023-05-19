import { Schema } from 'mongoose';

const movie = {
    id: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String
    }
};

export default new Schema(movie, {timestamps: true});