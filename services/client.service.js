import ClientRepository from "../repositories/client.repository.js";

const createClient = async (client) => {
  return await ClientRepository.insertClient(client);
};

const getClients = async () => {
  return await ClientRepository.getClients();
};

const getClient = async (id) => {
  return await ClientRepository.getClient(id);
};

const deleteClient = async (id) => {
  return await ClientRepository.deleteClient(id);
};

const updateClient = async (client) => {
  return await ClientRepository.updateClient(client);
};

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};
