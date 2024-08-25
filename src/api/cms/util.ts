/**
 * ISO 8601 形式の日付文字列を日本時間 (UTC+9) に変換し、"YYYY年M月D日" 形式で返す
 *
 * @param isoString ISO 8601 形式の日付文字列
 * @returns JST に変換した日付文字列
 */
export const dateConverter = (isoString: string): string => {
  // ISO 8601 形式の文字列を Date オブジェクトに変換
  const isoDate = new Date(isoString);

  // 日本時間 (UTC+9) に変換
  const jstDate = new Date(isoDate.getTime() + 9 * 60 * 60 * 1000);

  // 年、月、日を取得
  const year = jstDate.getFullYear();
  const month = jstDate.getMonth() + 1;
  const day = jstDate.getDate();

  console.log(
    jstDate.getHours() + ":" + jstDate.getMinutes() + ":" + jstDate.getSeconds()
  );

  // "YYYY年M月D日" 形式でフォーマット
  return `${year}年${month}月${day}日`;
};
