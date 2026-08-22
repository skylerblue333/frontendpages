import { describe, expect, it } from "vitest";
import { getSessionCookieOptions } from "./_core/cookies";

function request(protocol: string, forwardedProto?: string) {
  return {
    protocol,
    headers: forwardedProto ? { "x-forwarded-proto": forwardedProto } : {},
  } as never;
}

describe("session cookie attributes", () => {
  it("uses Lax cookies for local HTTP requests", () => {
    expect(getSessionCookieOptions(request("http"))).toMatchObject({
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
  });

  it("uses secure cross-site cookies for HTTPS requests", () => {
    expect(getSessionCookieOptions(request("https"))).toMatchObject({
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
  });

  it("honors the forwarded HTTPS protocol behind a reverse proxy", () => {
    expect(getSessionCookieOptions(request("http", "https, http"))).toMatchObject({
      secure: true,
      sameSite: "none",
    });
  });
});
