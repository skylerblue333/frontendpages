import { describe, expect, it } from "vitest";
import { TRPCError } from "@trpc/server";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import type { User } from "../drizzle/schema";

type TestContextOptions = {
  user?: User | null;
};

function createContext({ user = null }: TestContextOptions = {}): TrpcContext {
  return {
    user,
    req: {} as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

function createUser(overrides: Partial<User> = {}): User {
  const now = new Date();
  return {
    id: "test-user-id",
    openId: "test-open-id",
    email: "test@example.com",
    name: "Test User",
    username: "test_user",
    bio: null,
    avatar: null,
    banner: null,
    loginMethod: "test",
    role: "user",
    verified: false,
    balance: 0,
    createdAt: now,
    updatedAt: now,
    lastSignedIn: now,
    ...overrides,
  };
}

async function expectTrpcCode(operation: Promise<unknown>, code: string) {
  await expect(operation).rejects.toMatchObject({ code });
}

describe("critical workflow contracts", () => {
  it("rejects protected wallet access without an authenticated user", async () => {
    const caller = appRouter.createCaller(createContext());
    await expectTrpcCode(caller.wallet.overview(), "UNAUTHORIZED");
  });

  it("rejects protected profile access without an authenticated user", async () => {
    const caller = appRouter.createCaller(createContext());
    await expectTrpcCode(caller.user.profile({ userId: "test-user-id" }), "UNAUTHORIZED");
  });

  it("prevents an authenticated user from reading another user profile", async () => {
    const caller = appRouter.createCaller(createContext({ user: createUser() }));
    await expect(caller.user.profile({ userId: "different-user-id" })).resolves.toBeNull();
  });

  it("keeps unsupported AI creation explicitly unavailable", async () => {
    const caller = appRouter.createCaller(createContext({ user: createUser() }));
    await expectTrpcCode(caller.hopeAI.create({ prompt: "test" }), "NOT_IMPLEMENTED");
  });

  it("keeps education creation explicitly unavailable", async () => {
    const caller = appRouter.createCaller(createContext({ user: createUser() }));
    await expectTrpcCode(caller.wave3Learning.create({ course: "test" }), "NOT_IMPLEMENTED");
  });

  it("keeps admin creation unavailable and does not grant an admin capability", async () => {
    const caller = appRouter.createCaller(createContext({ user: createUser() }));
    await expectTrpcCode(caller.admin.create({ action: "test" }), "NOT_IMPLEMENTED");
  });

  it("rejects malformed social posts before persistence", async () => {
    const caller = appRouter.createCaller(createContext({ user: createUser() }));
    await expect(caller.feed.create({ content: "" })).rejects.toBeInstanceOf(TRPCError);
  });

  it("returns an empty public feed when no persisted posts are available", async () => {
    const caller = appRouter.createCaller(createContext());
    await expect(caller.feed.list({ limit: 10, offset: 0 })).resolves.toEqual([]);
  });
});
