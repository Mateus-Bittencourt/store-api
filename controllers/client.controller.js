import ClientService from "../services/client.service.js";

const createClient = async (req, res, next) => {
  try {
    const client = req.body;
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error("Name, CPF, Phone, Email and Address are required");
    }
    res.send(await ClientService.createClient(client));
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error);
  }
};

const getClients = async (req, res, next) => {
  try {
    res.send(await ClientService.getClients());
    logger.info("GET /client");
  } catch (error) {
    next(error);
  }
};

const getClient = async (req, res, next) => {
  try {
    res.send(await ClientService.getClient(req.params.id));
    logger.info(`GET /client/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

const deleteClient = async (req, res, next) => {
  try {
    await ClientService.deleteClient(req.params.id);
    res.status(204).end();

    logger.info(`DELETE /client/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

const updateClient = async (req, res, next) => {
  try {
    const client = req.body;
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address ||
      !client.clientId
    ) {
      throw new Error("Name, CPF, Phone, Email, Address and ID are required");
    }
    res.send(await ClientService.updateClient(client));
    logger.info(`PUT /client - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error);
  }
};

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};
