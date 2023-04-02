import mysql from "mysql";
const connection = mysql.createConnection(
  "mysql://utxaax2xvn6roddh:rOCNvsPcPI8u2H0qnBpJ@bqftf6779uzebzrlgrki-mysql.services.clever-cloud.com:3306/bqftf6779uzebzrlgrki"
);
connection.connect((err) => {
  console.log(err.message);
});
