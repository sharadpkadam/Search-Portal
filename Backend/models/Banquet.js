import { Schema, model } from "mongoose";

const banquetSchema = new Schema({
  imagePath: {type: String, required: true},
  name: { type: String, required: true },
  description: { type: String, required: true },
  capacity: { type: Number, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  phone: { type: String, required: true },
});

export default model("Banquet", banquetSchema);
