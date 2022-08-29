import { formatISODateToDate, _padTo2Digits } from "."

describe('#_padTo2Digits', ()=>{
  it('should add extra zero infront from number from param when it`s one digit', ()=>{
    const input = 9
    const expected = `0${input}`

    const result = _padTo2Digits(input)

    expect(result).toEqual(expected)
  })

  it('should not add extra zero infront of number from param when it`s two digit', ()=>{
    const input = 10
    const expected = input.toString()

    const result = _padTo2Digits(input)

    expect(result).toEqual(expected)
  })
})

describe('#formatISODateToDate', ()=>{
  it('should add extra zero infront from number from param when it`s one digit', ()=>{
    const input = '1975-07-06T14:30:31.907Z'
    const expected = `06-07-1975`

    const result = formatISODateToDate(input)

    expect(result).toEqual(expected)
  })
})