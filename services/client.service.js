import ClientRepository from "../repositories/client.repository.js";

const createClient = async (client) => {
  return await ClientRepository.insertClient(client);
};

const getClients = async () => {
  return await ClientRepository.getClients();
};

export default { createClient, getClients };
