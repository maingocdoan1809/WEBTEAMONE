"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mySqlInstance_1 = require("../models/database/mySqlInstance");
const fetchProductNameRoute = express_1.default.Router();
fetchProductNameRoute.get("/", (req, res) => {
    const userPromt = req.query.productname;
    try {
        (0, mySqlInstance_1.queryToDB)(`Select productName from MockData where productName like '${userPromt}%'`, (err, result, fields) => {
            if (err) {
                res.status(503).send([]);
            }
            else {
                res.send(result);
            }
        });
    }
    catch (err) {
        res.status(503).send([]);
    }
});
exports.default = fetchProductNameRoute;
