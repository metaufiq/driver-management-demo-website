import APIServices from "../../configs/api";
import { GetListUserResponses, Params } from "./randomUser.api.types";

/**
 * API request to get list of user
 * @param {Params} params  API params
 * @returns {Promise<GetListUserResponses>} API response
 */
export const getListUser = async (params: Params): Promise<GetListUserResponses> => {
  const { data } = await APIServices.RandomUser.get('/', {params});

  return data;
};

const randomUser = {
  getListUser
};

export default randomUser;