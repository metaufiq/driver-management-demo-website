import { assertSnapshots } from "../../test";
import PaginationBar from ".";
import { Configs } from "../../test/index.types";
import { Props } from "./PaginationBar.component.types";

describe('PaginationBarSnapshot', () => {

  const configs: Configs<Props> = [
    {
      desc: 'should render normal pagination bar',
      props:{
        onNext: ()=>{},
        onPrev: ()=>{},
        pageIndex: 1,
        totalPages: 5
      }
    }
  ];

  assertSnapshots(PaginationBar, configs);
});
