import db from "./db.js";

const insertSupplier = async (supplier) => {
  const conn = await db.connect();
  try {
    const sql =
      "INSERT INTO suppliers (name, cnpj, phone, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [
      supplier.name,
      supplier.cnpj,
      supplier.phone,
      supplier.email,
      supplier.address,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getSuppliers = async () => {
  const conn = await db.connect();
  try {
    const res = await conn.query("SELECT * FROM suppliers");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getSupplier = async (id) => {
  const conn = await db.connect();
  try {
    const res = await conn.query(
      "SELECT * FROM suppliers WHERE supplier_id = $1",
      [id]
    );
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const updateSupplier = async (supplier) => {
  const conn = await db.connect();
  try {
    const sql =
      "UPDATE suppliers SET name = $1, cnpj = $2, phone = $3, email = $4, address = $5 WHERE supplier_id = $6 RETURNING *";
    const values = [
      supplier.name,
      supplier.cnpj,
      supplier.phone,
      supplier.email,
      supplier.address,
      supplier.supplier_id,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const deleteSupplier = async (id) => {
  const conn = await db.connect();
  try {
    const res = await conn.query(
      "DELETE FROM suppliers WHERE supplier_id = $1",
      [id]
    );
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

export default {
  insertSupplier,
  getSuppliers,
  getSupplier,
  updateSupplier,
  deleteSupplier,
};
