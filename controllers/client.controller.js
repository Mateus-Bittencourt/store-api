import clientService from "../services/client.service.js";

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
    res.send(await clientService.createClient(client));
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error);
  }
};

const getClients = async (req, res, next) => {
  try {
    res.send(await clientService.getClients());
    logger.info("GET /client");
  } catch (error) {
    next(error);
  }
};

export default { createClient, getClients };
