import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Testimonial from "./models/Testimonial.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT;
const URL = process.env.URL;

mongoose
.connect(URL)
.then(() => console.log('データベースに接続成功'))
.catch((err) => console.log('エラーが発生しました:', err));

app.use(express.static("public"));
app.use(express.json());

app.get("/api/testimonial", async (req, res) => {
    try {
        const allTestis = await Testimonial.find({});
        res.status(200).json(allTestis);
    } catch (err) {
        console.log(err);
    }
});

app.post("/api/testimonial", async (req, res) => {
    try {
        const createTestimonial = await Testimonial.create(req.body);
        res.status(200).json(createTestimonial);
    } catch (err) {
        console.log(err);
    }
});

app.listen(process.env.PORT || PORT, console.log('Server connected'));