import { mockFunctionSetState } from "../../src/test";
import { _onInputSearch, _onNextPage, _onPrevPage } from "./DriverManagement.component";

describe('#_onInputSearch', () => {
  it('should return the event target value of search input', ()=>{
    const setSearchInput = jest.fn()
    const expected ='expected value'
    const event = {
      target:{
        value: expected
      }
    }
    // @ts-ignore: mock implementation
    _onInputSearch(setSearchInput)(event)

    expect(setSearchInput).toBeCalledWith(expected)
  })
});

describe('#_onNextPage', () => {
  it('should set next page index', ()=>{
    const {setterListener, setterObject:setPageIndex} = mockFunctionSetState(1)

    _onNextPage(setPageIndex)()

    expect(setterListener).toBeCalledWith(2)
  })
});

describe('#_onPrevPage', () => {
  it('should set previous page index', ()=>{
    const {setterListener, setterObject:setPageIndex} = mockFunctionSetState(2)

    _onPrevPage(setPageIndex)()

    expect(setterListener).toBeCalledWith(1)
  })
});
