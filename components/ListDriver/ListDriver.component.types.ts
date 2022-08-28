import { Users } from "../../index.types"


export type Props = {
  data: Users,
  isLoading?: boolean,
  isError?: boolean,
  refetch?: VoidFunction
}