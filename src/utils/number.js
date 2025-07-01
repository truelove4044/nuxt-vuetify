/**
 * 格式化數字為美式格式的字串
 *
 * @param value - 要格式化的數字
 * @returns 格式化後的字串，若無法格式化則回傳傳入的資料
 *
 * @example
 * numberFormat(1234567.89) // "1,234,567.89"
 */
export const numberFormat = (value) => {
  if (value === null || value === undefined || value === "") return value;
  const numberValue = Number(value);
  if (isNaN(numberValue)) return value;
  return new Intl.NumberFormat("en-US").format(numberValue);
};
