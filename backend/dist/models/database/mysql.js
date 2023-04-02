"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection("mysql://utxaax2xvn6roddh:rOCNvsPcPI8u2H0qnBpJ@bqftf6779uzebzrlgrki-mysql.services.clever-cloud.com:3306/bqftf6779uzebzrlgrki");
connection.connect((err) => {
    console.log(err.message);
});
