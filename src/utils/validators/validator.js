/**
 * 驗證陣列長度是否大於指定值
 *
 * @param {number} length 最小長度限制
 * @param {string} message 錯誤提示訊息
 * @returns {Function} 驗證函式
 */
export function validateMinArrayLength(length, message) {
  return (rule, value, callback) => {
    if (value.length > length) {
      // 驗證通過，回傳空結果
      callback()
    } else {
      // 驗證失敗，回傳錯誤訊息
      callback(new Error(message))
    }
  }
}
