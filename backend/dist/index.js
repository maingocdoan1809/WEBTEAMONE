"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect("mongodb+srv://maingocdoan:280254581809@cluster0.4u81pgm.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
    console.log("Connected");
})
    .catch((err) => {
    console.log("Cannot connect: " + err);
});
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello from typescript");
});
app.listen(3000, () => {
    console.log("App starting on port 3000");
});
