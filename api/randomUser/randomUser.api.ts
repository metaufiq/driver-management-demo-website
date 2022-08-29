import APIServices from "../../configs/api";
import { GetListUserResponses, Params } from "./randomUser.api.types";

export const getListUser = async (params: Params): Promise<GetListUserResponses> => {
  const { data } = await APIServices.RandomUser.get('/', {params});

  return data;
};

const randomUser = {
  getListUser
};

export default randomUser;