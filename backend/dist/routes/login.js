"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const loginRouter = express_1.default.Router();
loginRouter.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // online
    const connection = mysql_1.default.createConnection(process.env.SQL_STR);
    // local
    // const connection = mysql.createConnection({
    //   host: "localhost",
    //   port: 3306,
    //   database: "test",
    //   user: "root",
    //   password: "",
    // });
    connection.connect((err) => {
        if (err) {
            console.log("error: " + err.message);
        }
        else {
            connection.query(`Select * from Accounts where username = '${username}' and password = '${password}'`, (err, result, fields) => {
                if (err) {
                    console.log("error: " + err.message);
                    res.send({ err: true, accept: false });
                }
                else {
                    console.log(result);
                    res.send({
                        err: false,
                        accept: result.length > 0,
                    });
                }
            });
            connection.end();
        }
    });
});
exports.default = loginRouter;
