import { describe, it, expect } from "vitest";
import { isActivePath } from "../utils/userInterface.js";

describe("isActivePath", () => {
  it("returns true when paths match exactly", () => {
    expect(isActivePath("/venues", "/venues")).toBe(true);
  });

  it("returns true for the root path", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it("returns true for /index.html", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes href", () => {
    expect(isActivePath("/venues", "/venues/123")).toBe(true);
  });

  it("returns false when paths do not match", () => {
    expect(isActivePath("/venues", "/login")).toBe(false);
  });
});
