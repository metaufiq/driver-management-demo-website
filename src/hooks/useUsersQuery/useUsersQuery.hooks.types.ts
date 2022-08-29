import { SetState, Users } from "../../../index.types";

export type SetLoading = SetState<boolean>

export type SetError = SetState<boolean>

export type HooksData = {
  users: Users;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}
