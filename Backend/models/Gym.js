import { Schema, model } from 'mongoose';

const gymSchema = new Schema({
    imagePath: {type: String, required: true},
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    Plans: { type: String, required: true },
    amenities: { type: String, required: true },
    phonenumber: {type: String, required: true},
});

export default model('Gym', gymSchema);
