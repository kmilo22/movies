import mongoose, { Schema, Document } from "mongoose";

export interface IMovie extends Document {
    title: string;
    category: string;
    price: number;
    description: string;
    image: string;
}

const MovieSchema: Schema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String},
});

export default mongoose.model<IMovie>("Movie", MovieSchema);