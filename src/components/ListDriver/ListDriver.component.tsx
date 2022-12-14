import { ReactElement } from "react"
import { Component } from "@dmd/types"
import Button from "../Button"
import DriverCard from "../DriverCard"
import Spinner from "../Spinner"
import { DataContainer, ErrorContainer, SpinnerContainer } from "./ListDriver.component.styles"
import { Props } from "./ListDriver.component.types"

/**
 * List Driver components
 * @param {Props} props component props 
 * @returns {ReactElement} List Driver components
 */
const ListDriver:Component<Props> = (
  {isLoading, isError, data, refetch}: Props
): ReactElement=>{
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
        <Button 
          onClick={refetch} 
          buttonType="PRIMARY"
        >
          Coba Lagi
        </Button>
      </ErrorContainer>
    )
  }

  return(
    <DataContainer>
      {data?.map((user,index)=>(<DriverCard user={user} key={index}/>))}
    </DataContainer>
  )
}

export default ListDriver