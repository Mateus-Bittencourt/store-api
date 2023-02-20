import db from "./db.js";

const insertClient = async (client) => {
  const conn = await db.connect();
  try {
    const sql =
      "INSERT INTO clients (name, cpf, phone, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [
      client.name,
      client.cpf,
      client.phone,
      client.email,
      client.address,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getClients = async () => {
  const conn = await db.connect();
  try {
    const res = await conn.query("SELECT * FROM clients");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getClient = async (id) => {
  const conn = await db.connect();
  try {
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const updateClient = async (id, client) => {
  const conn = await db.connect();
  try {
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const deleteClient = async (id) => {
  const conn = await db.connect();
  try {
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

export default {
  insertClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
};
