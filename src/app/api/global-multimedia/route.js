import { NextResponse } from "next/server";

const API_BASE = "https://verbalmdt.softvencefsd.xyz";

export const dynamic = "force-dynamic"; // ensure fresh data, no static caching

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get("year");
    const url = `${API_BASE}/api/global-multimedia${year ? `?year=${encodeURIComponent(year)}` : ""}`;

    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    // If upstream returns non-JSON or error, attempt to forward status and body
    const data = await res.json().catch(() => null);

    if (!res.ok) {
      return NextResponse.json(
        { message: "Upstream error", status: res.status, data },
        { status: res.status }
      );
    }

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Upstream fetch failed", error: String(error) },
      { status: 502 }
    );
  }
}