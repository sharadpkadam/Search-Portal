import { Schema, model } from 'mongoose';

const realEstateSchema = new Schema({
    imagePath: {type: String, required: true},
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    realEstateType: { type: String, required: true },
    price: { type: Number, required: true },
    phonenumber: { type: String, required: true },
});

export default model('RealEstate', realEstateSchema);
