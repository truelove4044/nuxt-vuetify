/**
 * 台灣手機號碼的正則表達式
 *
 * 匹配格式：
 * 1. 09xx-xxx-xxx（含連字符）
 * 2. 09xxxxxxxx（不含連字符）
 */
export const TW_MOBILE_REGEX = /(^09\d{2}-?\d{3}-?\d{3}$)|(09\d{8}$)/;

/**
 * 中文字符的正則表達式
 *
 * 匹配範圍：
 * 1. 基本漢字（\u4E00-\u9FFF）
 * 2. 擴展漢字 A（\u3400-\u4DBF）
 * 3. 兼容漢字（\uF900-\uFAFF）
 */
export const CHINESE_CHARACTERS_REGEX =
  /^[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]+$/;
