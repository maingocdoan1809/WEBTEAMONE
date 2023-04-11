"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mySqlInstance_1 = require("../models/database/mySqlInstance");
const loginUltils_1 = require("../ultils/loginUltils");
const loginRouter = express_1.default.Router();
loginRouter.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        (0, mySqlInstance_1.queryToDB)(`Select * from Account where username = '${username}' and password = '${password}'`, (err, result, fields) => {
            if (err) {
                throw err;
            }
            else {
                res.send({
                    err: false,
                    accept: result.length > 0,
                    user: {
                        fullname: result["fullname"],
                        username: result["username"],
                        priority: (0, loginUltils_1.getPriority)(result["priority"]),
                        state: (0, loginUltils_1.getState)(result["state"]),
                    },
                });
            }
        });
    }
    catch (err) {
        res.send({ err: true, accept: false });
    }
});
exports.default = loginRouter;
