const express = require('express');
const routes = express.Router();
const queries = require('../database/queries');
routes.get('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(queries.getAllData, (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
});
routes.post('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(queries.AddNewData, [req.body], (err, rows) => {
      if (err) return res.send(err);
      res.json(req.body);
    });
  });
});
routes.delete('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(queries.deleteData, [req.params.id], (err, rows) => {
      if (err) return res.send(err);
      res.send('user excluded!');
    });
  });
});
routes.put('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(queries.updateData, [req.body, req.params.id], (err, rows) => {
      if (err) return res.send(err);
      res.send('user updated!');
    });
  });
});
module.exports = routes;