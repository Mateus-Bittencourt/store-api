import Client from "../models/client.model.js";
import db from "./db.js";

const insertClient = async (client) => {
  try {
    return await Client.create(client);
  } catch (error) {
    throw error;
  }
};

const getClients = async () => {
  try {
    return await Client.findAll();
  } catch (error) {
    throw error;
  }
};

const getClient = async (id) => {
  try {
    return await Client.findByPk(id);
  } catch (error) {
    throw error;
  }
};

const updateClient = async (client) => {
  try {
    await Client.update(client, {
      where: {
        client_id: client.clientId,
      },
    });
    return await getClient(client.clientId);
  } catch (error) {
    throw error;
  }
};

const deleteClient = async (id) => {
  try {
    await Client.destroy({
      where: {
        client_id: id,
      },
    });
  } catch (error) {
    throw error;
  }
};

export default {
  insertClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
};
