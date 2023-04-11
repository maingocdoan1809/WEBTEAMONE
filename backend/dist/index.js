"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const loginroute_1 = __importDefault(require("./routes/loginroute"));
const fetchProductName_1 = __importDefault(require("./api/fetchProductName"));
const registerroute_1 = __importDefault(require("./routes/registerroute"));
// config .env file.
dotenv_1.default.config();
// create express app.
const app = (0, express_1.default)();
// use middleware, accept all headers.
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.use(express_1.default.json());
// use Login router.
app.use("/login", loginroute_1.default);
app.use("/product", fetchProductName_1.default);
app.use("/register", registerroute_1.default);
// server listen to request.
app.listen(3000, () => {
    console.log("App starting on port 3000");
});
