export type User = {
  name: {
    first: string,
    last: string
  },
  email: string,
  login: {
    username: string,
  },
  dob: {
    date: string
  },
  phone: string
}

export type GetListUserResponses = {
  results: User[],
}

export type Params = {
  results?: number
}