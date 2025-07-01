/**
 * 驗證統一編號
 * @param {string} value 統一編號
 * @returns {boolean} 是否正確
 */
export function checkUniformNumbers(value) {
  const regex = /^\d{8}$/;
  if (!regex.test(value)) return false;

  const code = [1, 2, 1, 2, 1, 2, 4, 1];
  let weightsNum = 0;

  if (value[6] !== "7") {
    weightsNum = [...value].reduce((acc, cur, i) => {
      let number = Number.parseInt(cur) * code[i];
      if (number >= 10) {
        const moreThen10 = `${number}`;
        number =
          Number.parseInt(moreThen10[0]) + Number.parseInt(moreThen10[1]);
      }
      return acc + number;
    }, 0);
    return weightsNum % 5 === 0;
  }

  // 第7位數為7
  weightsNum = [...value].reduce((acc, cur, i) => {
    if (i === 6) return acc;

    let number = Number.parseInt(cur) * code[i];
    if (number >= 10) {
      const moreThen10 = `${number}`;
      number = Number.parseInt(moreThen10[0]) + Number.parseInt(moreThen10[1]);
    }
    return acc + number;
  }, 0);
  return weightsNum % 5 === 0 || (weightsNum + 1) % 5 === 0;
}
