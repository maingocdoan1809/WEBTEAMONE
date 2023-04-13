"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mySqlInstance_1 = require("../models/database/mySqlInstance");
const registerRoute = express_1.default.Router();
registerRoute.post("/", (req, res) => {
    const infor = req.body;
    console.log(infor);
    (0, mySqlInstance_1.queryToDB)(`Insert into Account(username, password, fullname, email, phonenumber) values ('${infor.username}','${infor.password}', '${infor.fullname}', '${infor.email}','${infor.phonenumber}')`, (err, result, fields) => {
        if (err) {
            res.status(406).send();
            console.log(err);
        }
        else {
            res.status(201).send({
                fullname: infor.fullname,
                username: infor.username,
            });
        }
    });
});
exports.default = registerRoute;
