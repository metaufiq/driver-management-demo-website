import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Component } from "../../../index.types";
import Button from "../Button";
import { PaginationContainer } from "./PaginationBar.component.styles";
import { Props } from "./PaginationBar.component.types";

const MINIMUM_PAGE_INDEX = 1;

const PaginationBar:Component<Props> = ({onNext, onPrev, pageIndex, totalPages})=>(
  <PaginationContainer>
    <Button
      onClick={onPrev} 
      disabled={pageIndex===MINIMUM_PAGE_INDEX}
      buttonType='NAVIGATION'
    >
      <FiChevronLeft/>
      Prev Page
    
    </Button>
    <Button 
      onClick={onNext} 
      disabled={pageIndex===totalPages}
      buttonType='NAVIGATION'
    >
      Next Page
      <FiChevronRight/>
    </Button>
</PaginationContainer>
) 

export default PaginationBar