require('dotenv').config();
const table = process.env.TABLE;
module.exports = {
  getAllData: `SELECT * FROM ${table}`,
  AddNewData: `INSERT INTO ${table} set ?`,
  getDataByFolio: `SELECT * FROM ${table} WHERE id = @id`,
  deleteData: `DELETE FROM ${table} WHERE id = ?`,
  getTotalData: `SELECT COUNT(*) FROM ${table}`,
  updateData: `UPDATE ${table} SET ? WHERE id = ?`
};