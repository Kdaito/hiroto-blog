import { dateConverter } from "./util";

describe("dateConverterのユニットテスト", () => {
  test("ISO8601形式の文字列を、日本時間の年月日表示に直す", () => {
    expect(dateConverter("2021-01-01T23:00:00Z")).toBe("2021年1月2日");
    expect(dateConverter("2021-01-01T15:00:00Z")).toBe("2021年1月2日");
    expect(dateConverter("2021-01-01T14:59:00Z")).toBe("2021年1月1日");
  });
});
