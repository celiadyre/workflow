import { describe, it, expect, beforeEach } from "vitest";
import { saveUser, getUsername, clearStorage } from "../utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("returns the username when a user exists in storage", () => {
    const user = {
      data: {
        name: "TestUser",
        email: "test@example.com",
      },
    };

    saveUser(user);

    expect(getUsername()).toBe("TestUser");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
