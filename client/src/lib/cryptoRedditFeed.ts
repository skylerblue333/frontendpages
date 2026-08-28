export type CryptoRedditPost = {
  id: string;
  title: string;
  author: string;
  score: number;
  url: string;
  source: "shadowchat-core";
};

/**
 * Curated UI fixtures derived from ShadowChat-Core's CryptoRedditFeed screen.
 * These are intentionally local until a verified Reddit/crypto-news contract exists.
 */
export const cryptoRedditFixture: readonly CryptoRedditPost[] = [
  {
    id: "crypto-reddit-001",
    title: "SkyCoin ecosystem discussion",
    author: "community",
    score: 420,
    url: "#",
    source: "shadowchat-core",
  },
  {
    id: "crypto-reddit-002",
    title: "Protocol architecture and decentralized infrastructure",
    author: "engineering",
    score: 315,
    url: "#",
    source: "shadowchat-core",
  },
  {
    id: "crypto-reddit-003",
    title: "Market infrastructure reliability patterns",
    author: "research",
    score: 287,
    url: "#",
    source: "shadowchat-core",
  },
];

export function filterCryptoRedditPosts(
  posts: readonly CryptoRedditPost[],
  searchTerm: string
): CryptoRedditPost[] {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return [...posts];

  return posts.filter(post =>
    `${post.title} ${post.author}`.toLowerCase().includes(query)
  );
}

export function paginateCryptoRedditPosts(
  posts: readonly CryptoRedditPost[],
  page: number,
  pageSize = 10
): { items: CryptoRedditPost[]; page: number; totalPages: number } {
  if (!Number.isInteger(pageSize) || pageSize < 1) {
    throw new RangeError("pageSize must be a positive integer");
  }

  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const safePage = Math.min(Math.max(1, Math.trunc(page)), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: posts.slice(start, start + pageSize),
    page: safePage,
    totalPages,
  };
}
