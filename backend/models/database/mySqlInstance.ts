import mysql, { FieldInfo, MysqlError } from "mysql";
export function queryToDB(
  queryStr: string,
  callBack: (err: MysqlError, result: any, fields: FieldInfo[]) => void
) {
  const connection = mysql.createConnection(process.env.SQL_STR!);
  connection.connect((err) => {
    if (err) {
      throw err;
    } else {
      connection.query(queryStr, callBack).values;
    }
    connection.end();
  });
}
