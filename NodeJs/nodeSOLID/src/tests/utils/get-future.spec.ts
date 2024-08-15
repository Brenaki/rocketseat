import { expect, test } from "vitest"
import { getFutureDate } from "./get-future"

test('increases date with one year', () => {
  const year = new Date().getFullYear();

  expect(getFutureDate(`${year}-08-15`).getFullYear()).toEqual(2025);
})