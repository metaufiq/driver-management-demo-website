
import { SetState } from "../../index.types";

export type SetSearchInput = SetState<string|undefined>

export type SetPageIndex = SetState<number>

export type SearchEvent = React.ChangeEvent<HTMLInputElement>

export type SearchEventFunction = (event: SearchEvent)=>void