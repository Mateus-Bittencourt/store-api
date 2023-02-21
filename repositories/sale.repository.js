import db from "./db.js";

const insertSale = async (sale) => {
  const conn = await db.connect();
  try {
    const sql =
      "INSERT INTO sales (value, date, client_id, product_id) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [sale.value, sale.date, sale.client_id, sale.product_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getSales = async () => {
  const conn = await db.connect();
  try {
    const res = await conn.query("SELECT * FROM sales");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getSalesByProductId = async (productId) => {
  const conn = await db.connect();
  try {
    const res = await conn.query(
      "SELECT * FROM sales WHERE sales.product_id = $1",
      [productId]
    );
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getSale = async (id) => {
  const conn = await db.connect();
  try {
    const res = await conn.query("SELECT * FROM sales WHERE sale_id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const updateSale = async (sale) => {
  const conn = await db.connect();
  try {
    const sql =
      "UPDATE sales SET value = $1, date = $2, client_id = $3 WHERE sale_id = $4 RETURNING *";
    const values = [sale.value, sale.date, sale.client_id, sale.sale_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const deleteSale = async (id) => {
  const conn = await db.connect();
  try {
    const res = await conn.query("DELETE FROM sales WHERE sale_id = $1", [id]);
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

export default {
  insertSale,
  getSales,
  getSale,
  updateSale,
  deleteSale,
  getSalesByProductId,
};
