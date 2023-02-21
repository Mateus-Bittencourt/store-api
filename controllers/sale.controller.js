import SaleService from "../services/sale.service.js";

const createSale = async (req, res, next) => {
  try {
    const sale = req.body;
    if (!sale.value || !sale.date || !sale.client_id || !sale.product_id) {
      throw new Error("Value, Date, Client ID and Product ID are required");
    }
    res.send(await SaleService.createSale(sale));
    logger.info(`POST /sale - ${JSON.stringify(sale)}`);
  } catch (error) {
    next(error);
  }
};

const getSales = async (req, res, next) => {
  try {
    res.send(await SaleService.getSales(req.query.product_id));
    logger.info("GET /sale");
  } catch (error) {
    next(error);
  }
};

const getSale = async (req, res, next) => {
  try {
    res.send(await SaleService.getSale(req.params.id));
    logger.info(`GET /sale/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

const deleteSale = async (req, res, next) => {
  try {
    await SaleService.deleteSale(req.params.id);
    res.status(204).end();

    logger.info(`DELETE /sale/${req.params.id}`);
  } catch (error) {
    next(error);
  }
};

const updateSale = async (req, res, next) => {
  try {
    const sale = req.body;
    if (
      !sale.value ||
      !sale.date ||
      !sale.client_id ||
      !sale.product_id ||
      !sale.sale_id
    ) {
      throw new Error(
        "Value, Date, Client ID, Product ID and Sale ID are required"
      );
    }
    res.send(await SaleService.updateSale(sale));
    logger.info(`PUT /sale - ${JSON.stringify(sale)}`);
  } catch (error) {
    next(error);
  }
};

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};
