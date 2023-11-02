import Provider from "../models/providerModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllProviders = async (req, res, error) => {
  const providers = await Provider.find();

  res.status(StatusCodes.OK).json({
    status: StatusCodes.OK,
    data: {
      providers,
    },
  });
};
