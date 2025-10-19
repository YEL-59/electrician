export async function GET() {
  const upstream = "https://verbalmdt.softvencefsd.xyz/api/api-blogs";

  try {
    const res = await fetch(upstream, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    const data = await res.json();
    return Response.json(data, { status: res.status });
  } catch (error) {
    return Response.json(
      { success: false, message: "Proxy error", error: String(error) },
      { status: 500 }
    );
  }
}