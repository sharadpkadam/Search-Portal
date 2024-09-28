import { Schema, model } from 'mongoose';

const booking = new Schema({
    hallId: {type: String, required: true},
    name: { type: String, required: true },
    mobile: {type: Number, required: true},
    email: {type: String, required: true},
    date: {type: Date, required:true}
});

export default model('booking', booking);
