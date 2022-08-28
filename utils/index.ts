const padTo2Digits = (num:number) => {
  return num.toString().padStart(2, '0');
}

export const formatISODateToDate = (ISODate: string) =>{
  const date = new Date(ISODate);
  
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('-');
}