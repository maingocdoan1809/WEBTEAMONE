"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryToDB = void 0;
const mysql_1 = __importDefault(require("mysql"));
function queryToDB(queryStr, callBack) {
    const connection = mysql_1.default.createConnection(process.env.SQL_STR);
    connection.connect((err) => {
        if (err) {
            throw err;
        }
        else {
            connection.query(queryStr, callBack);
        }
        connection.end();
    });
}
exports.queryToDB = queryToDB;
