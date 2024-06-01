import mongoose from "mongoose";

const TestiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    job_title: {
        type: String,
        required: true,
    },
    comment_title: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
        maxlength: 200,
    },
    photo: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Testi", TestiSchema);