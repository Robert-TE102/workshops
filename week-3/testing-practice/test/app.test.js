import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "../apps";

describe("findMaxValue", function () {
  test("value 1", function () {
    const result = max(3, 7, 2, 8, 5);
    const expected = 8;
    expect(result).toBe(expected);
  });
});

import(findMaxValue());
findMaxValue([3, 7, 2, 8, 5]);
findMaxValue([]);
findMaxValue([-10, -5, -1]);
findMaxValue("not an array");

/*factorial(5);
factorial(0);
factorial(-3);
factorial("5");

areArraysEqual([1, 2, 3], [1, 2, 3]);
areArraysEqual([1, 2, 3], [3, 2, 1]);
areArraysEqual([], []);
areArraysEqual([1, 2], [1, 2, 3]);

toTitleCase("hello world");
toTitleCase("JAVASCRIPT IS FUN");
toTitleCase("123 testing titles");
toTitleCase(12345);*/
