import { mlToCups, mlToLitres } from "../conversion";

describe("mlToCups", () => {
  it("should convert milliliters to cups", () => {
    expect(mlToCups(500, 250)).toBe("2.0");
    expect(mlToCups(1000, 200)).toBe("5.0");
    expect(mlToCups(750, 150)).toBe("5.0");
    expect(mlToCups(245, 180)).toBe("1.4");
    expect(mlToCups(300, 1000)).toBe("0.3");
  });

  it("should handle cupSize of 0", () => {
    expect(mlToCups(500, 0)).toBe("Infinity");
    expect(mlToCups(1000, 0)).toBe("Infinity");
    expect(mlToCups(750, 0)).toBe("Infinity");
  });
});

describe("litres", () => {
  it("should convert milliliters to liters", () => {
    expect(mlToLitres(500)).toBe("0.5");
    expect(mlToLitres(1000)).toBe("1.0");
    expect(mlToLitres(750)).toBe("0.8");
  });

  it("should handle 0 milliliters", () => {
    expect(mlToLitres(0)).toBe("0.0");
  });
});
