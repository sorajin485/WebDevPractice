const sql = require("./config/db.js");
const axios = require('axios');

Mslm.create = (newMslm, result) => {
  console.log("req : " + newMslm);
  
  sql.query("INSERT INTO mslms SET ?", newMslm, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created mslm: ", { id: res.insertId, ...newMslm });
    result(null, { id: res.insertId, ...newMslm });
  });
};

Mslm.findById = (mslmId, result) => {
  sql.query(`SELECT * FROM mslms WHERE id = ${mslmId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found mslm: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Mslm with the id
    result({ kind: "not_found" }, null);
  });
};

Mslm.getAll = result => {
  sql.query("SELECT * FROM mslms", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("mslms: ", res);
    result(null, res);
  });
};

Mslm.updateById = (id, mslm, result) => {
  sql.query(
    "UPDATE mslms SET ip = ?, name = ?, active = ? WHERE id = ?",
    [mslm.ip, mslm.name, mslm.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Mslm with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated mslm: ", { id: id, ...mslm });
      result(null, { id: id, ...mslm });
    }
  );
};

Mslm.remove = (id, result) => {
  sql.query("DELETE FROM mslms WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Mslm with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted mslm with id: ", id);
    result(null, res);
  });
};

Mslm.removeAll = result => {
  sql.query("DELETE FROM mslms", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} mslms`);
    result(null, res);
  });
};

module.exports = Mslm;