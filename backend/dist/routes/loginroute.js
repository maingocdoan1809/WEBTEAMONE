"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mySqlInstance_1 = require("../models/database/mySqlInstance");
const loginRouter = express_1.default.Router();
loginRouter.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        (0, mySqlInstance_1.queryToDB)(`Select * from Accounts where username = '${username}' and password = '${password}'`, (err, result, fields) => {
            if (err) {
                throw err;
            }
            else {
                res.send({
                    err: false,
                    accept: result.length > 0,
                    username: username,
                });
            }
        });
    }
    catch (err) {
        res.send({ err: true, accept: false });
    }
});
exports.default = loginRouter;
