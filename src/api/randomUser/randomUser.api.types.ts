import { UserFromAPI } from "../../../index.types"

export type GetListUserResponses = {
  results: UserFromAPI[],
}

export type Params = {
  results?: number
}