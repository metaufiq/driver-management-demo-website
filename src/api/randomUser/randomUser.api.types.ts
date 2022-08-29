import { UserFromAPI } from "@dmd/types"

export type GetListUserResponses = {
  results: UserFromAPI[],
}

export type Params = {
  results?: number
}