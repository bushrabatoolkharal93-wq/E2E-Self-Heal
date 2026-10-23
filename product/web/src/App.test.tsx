import { describe, it, expect } from "vitest";

type Health = { status: "ok" | "degraded"; database: boolean };
type HealthState = 
  | { kind: "loading" } 
  | { kind: "loaded"; health: Health } 
  | { kind: "error" };

function statusTone(state: HealthState): string {
  if (state.kind === "loading") {
    return "border-gray-300 bg-gray-50";
  }
  if (state.kind === "loaded" && state.health.status === "ok" && state.health.database) {
    return "border-green-300 bg-green-50 text-green-700";
  }
  if (state.kind === "loaded" && state.health.status === "degraded") {
    return "border-yellow-300 bg-yellow-50 text-yellow-700";
  }
  if (state.kind === "error") {
    return "border-red-300 bg-red-50 text-red-700";
  }
  return "border-gray-300 bg-gray-50";
}

describe("Health states #344", () => {
  it("loading should be gray", () => {
    expect(statusTone({ kind: "loading" })).toContain("gray");
  });

  it("ok should be green", () => {
    expect(statusTone({ kind: "loaded", health: { status: "ok", database: true } })).toContain("green");
  });

  it("degraded should be yellow", () => {
    expect(statusTone({ kind: "loaded", health: { status: "degraded", database: true } })).toContain("yellow");
  });

  it("error should be red", () => {
    expect(statusTone({ kind: "error" })).toContain("red");
  });
});