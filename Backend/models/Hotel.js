import { Schema, model } from 'mongoose';

const hotelSchema = new Schema({
    imagePath: {type: String, required: true},
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    roomType: { type: String, required: true },
    price: { type: Number, required: true },
    phonenumber: { type: String, required: true },
});

export default model('Hotel', hotelSchema);
