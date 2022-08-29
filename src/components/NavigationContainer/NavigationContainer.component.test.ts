import { _showSidebar } from "./NavigationContainer.component";

describe('#_showSideBar', () => {
  it('should set visibility to false', ()=>{
    const setVisible = jest.fn()
    
    _showSidebar(setVisible, false)()

    expect(setVisible).toBeCalledWith(false)
  })

  it('should set visibility to true', ()=>{
    const setVisible = jest.fn()
    
    _showSidebar(setVisible, true)()

    expect(setVisible).toBeCalledWith(true)
  })
});
