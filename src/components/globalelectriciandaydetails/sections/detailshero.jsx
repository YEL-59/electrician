// ✅ Server-side fetch function
async function getDetailsHero() {
  try {
    const res = await fetch(
      "https://verbalmdt.softvencefsd.xyz/api/electrician-day-images",
      {
        cache: "no-store", // always fetch fresh data
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch electrician images");
    }

    const data = await res.json();
    console.log("✅ [Server Log] API Response:", data); // <-- shows in terminal
    return data;
  } catch (error) {
    console.error("❌ [Server Log] Fetch error:", error);
    return null;
  }
}

// ✅ Server Component
const DetailsHero = async () => {
  const data = await getDetailsHero();
  const imageUrl = data?.data?.[0]?.image;

  if (!imageUrl) {
    return (
      <div className="text-center py-20 text-gray-500">
        Failed to load hero image.
      </div>
    );
  }

  return (
    <>
      {/* Hero Image */}
      <div className="w-full h-64 mt-0 md:h-96 bg-gray-200 overflow-hidden relative">
        <img
          src={imageUrl}
          alt="Electrician Hero"
          className="w-full h-full object-cover"
        />

        {/* This script logs it to browser console for debugging */}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log("✅ [Client Log] Hero Image URL:", "${imageUrl}");`,
          }}
        />
      </div>
    </>
  );
};

export default DetailsHero;
