"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect("mongodb+srv://maingocdoan:280254581809@cluster0.4u81pgm.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
    console.log("Connected");
})
    .catch((err) => {
    console.log("Cannot connect: " + err);
});
exports.default = mongoose_1.default;
