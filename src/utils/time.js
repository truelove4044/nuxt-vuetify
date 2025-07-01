import dayjs from "dayjs";

/**
 * 建立一個從 start 到 stop,每次遞增 step 的年份陣列
 *
 * @param {number} start - 開始年份
 * @param {number} stop - 結束年份
 * @param {number} step - 每次遞增的數量
 * @returns {number[]} - 結果陣列
 */
export function createYearRange(start, stop, step = -1) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step,
  );
}

/**
 * 計算指定年月的週數
 *
 * @param {number} year - 年份
 * @param {number} month - 月份
 * @returns {number} 該月份的週數
 */
export function getWeekOfMonth(year, month) {
  const date = new Date(year, month - 1, 1);
  const firstDay = date.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const weekOfMonth = Math.ceil((firstDay + daysInMonth) / 7);
  return weekOfMonth;
}

/**
 * 取得當下在當前月份的週數
 *
 * @returns {number} 當下在當前月份的週數
 */
export function getWeekOfCurrentMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const nowDay = now.getDate();

  const firstDate = new Date(year, month - 1, 0);
  const firstDay = firstDate.getDay();

  const week = Math.ceil((firstDay + nowDay) / 7);
  return week;
}

/**
 * 以指定格式格式化日期
 *
 * @param {Date} date - 要格式化的日期
 * @param {string} [format="YYYY-MM-DD"] - 要使用的格式
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date, format = "YYYY-MM-DD") {
  return dayjs(date).format(format);
}

/**
 * 輸入年、月、周次，會得到當周的起始日跟結束日
 *
 * @param {number} year - 年
 * @param {number} month - 月
 * @param {number} week - 周次
 * @returns {{start: Date, end: Date}}
 */
export function getDateByWeek(year, month, week) {
  const firstDay = new Date(year, month - 1, 1);
  const firstDayWeek = firstDay.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  const start = (week - 1) * 7 + 1 - firstDayWeek;
  const end = week * 7 - firstDayWeek;

  if (week === 1) {
    const stateDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month - 1, end);
    return { start: stateDate, end: endDate };
  } else if (end > daysInMonth) {
    const stateDate = new Date(year, month - 1, start);
    const endDate = new Date(year, month - 1, daysInMonth);
    return { start: stateDate, end: endDate };
  } else {
    const stateDate = new Date(year, month - 1, start);
    const endDate = new Date(year, month - 1, end);
    return { start: stateDate, end: endDate };
  }
}
