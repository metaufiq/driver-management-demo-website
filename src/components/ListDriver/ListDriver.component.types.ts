import { Users } from "@dmd/types"


export type Props = {
  data: Users,
  isLoading?: boolean,
  isError?: boolean,
  refetch?: VoidFunction
}