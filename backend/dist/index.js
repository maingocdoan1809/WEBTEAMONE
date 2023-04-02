"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection = mysql_1.default.createConnection(process.env.SQL_STR);
const app = (0, express_1.default)();
app.get("/thanhtoan", (req, res) => {
    // lam cai gii day
    res.send({
        isOk: "OK Nha",
    });
});
app.listen(3000, () => {
    console.log("App starting on port 3000");
});
