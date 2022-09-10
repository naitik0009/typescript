import mongoose from "mongoose";
const proSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    inStock: {
        type: Number,
        required: true
    },
    fastDelivery: {
        type: Boolean,
        required: true,
        default: false
    },
    rating: {
        type: Number,
        required: true
    }
});
export { proSchema };
