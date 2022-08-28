import { Component } from "../../index.types"
import { PrimaryButton } from "../Button"
import DriverCard from "../DriverCard"
import Spinner from "../Spinner"
import { DataContainer, ErrorContainer, SpinnerContainer } from "./ListDriver.component.styles"
import { Props } from "./ListDriver.component.types"

const ListDriver:Component<Props> = ({isLoading, isError, data, refetch})=>{
  if (isLoading) {
   return(
    <SpinnerContainer>
      <Spinner size='4rem'/>
    </SpinnerContainer>
   ) 
  }

  if (isError) {
    return(
      <ErrorContainer>
        <p>Terjadi Kesalahan Saat pengambilan Data Driver.</p>
        <PrimaryButton onClick={refetch}>Coba Lagi</PrimaryButton>
      </ErrorContainer>
    )
  }

  return(
    <DataContainer>
      {data?.map(user=>(<DriverCard user={user} key={user.username}/>))}
    </DataContainer>
  )
}

export default ListDriver