import { describe, expect, it } from "vitest";

import {
  cryptoRedditFixture,
  filterCryptoRedditPosts,
  paginateCryptoRedditPosts,
} from "../client/src/lib/cryptoRedditFeed";

describe("CryptoRedditFeed domain helpers", () => {
  it("ships with typed fixture provenance", () => {
    expect(cryptoRedditFixture.length).toBeGreaterThan(0);
    expect(cryptoRedditFixture.every(post => post.source === "shadowchat-core")).toBe(true);
  });

  it("filters by title or author without mutating source data", () => {
    const original = [...cryptoRedditFixture];
    const result = filterCryptoRedditPosts(cryptoRedditFixture, "architecture");

    expect(result).toHaveLength(1);
    expect(result[0]?.title).toContain("architecture");
    expect(cryptoRedditFixture).toEqual(original);
  });

  it("clamps pagination and reports total pages", () => {
    const result = paginateCryptoRedditPosts(cryptoRedditFixture, 99, 2);

    expect(result.page).toBe(2);
    expect(result.totalPages).toBe(2);
    expect(result.items).toHaveLength(1);
  });

  it("rejects invalid page sizes", () => {
    expect(() => paginateCryptoRedditPosts(cryptoRedditFixture, 1, 0)).toThrow(
      "pageSize must be a positive integer"
    );
  });
});
