/**
 * formator number to two digits number with string type
 * @param {number} num number
 * @returns {string} two digits number with string type
 */
export const _padTo2Digits = (num:number): string => {
  return num.toString().padStart(2, '0');
}

/**
 * format ISO date to format DD-MM-YYYY
 * @param {string} ISODate ISO date
 * @returns {string} date with format DD-MM-YYYY
 */
export const formatISODateToDate = (ISODate: string) =>{
  const date = new Date(ISODate);
  
  return [
    _padTo2Digits(date.getDate()),
    _padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('-');
}