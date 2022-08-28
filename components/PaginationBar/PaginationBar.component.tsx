import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Component } from "../../index.types";
import { NavigationButton } from "../Button";
import { PaginationContainer } from "./PaginationBar.component.styles";
import { Props } from "./PaginationBar.component.types";

const MINIMUM_PAGE_INDEX = 1;

const PaginationBar:Component<Props> = ({onNext, onPrev, pageIndex, totalPages})=>(
  <PaginationContainer>
    <NavigationButton 
      onClick={onPrev} 
      disabled={pageIndex===MINIMUM_PAGE_INDEX}
    >
      <FiChevronLeft/>
      Prev Page
    
    </NavigationButton>
    <NavigationButton 
      onClick={onNext} 
      disabled={pageIndex===totalPages}
    >
      Next Page
      <FiChevronRight/>
    </NavigationButton>
</PaginationContainer>
) 

export default PaginationBar