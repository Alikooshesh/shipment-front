import { getOneBlData } from "@/services/dashboard/bl";

export default async function TrackingPage({ searchParams }) {
  const code = searchParams.code;

  if (!code) {
    return <div>No tracking code provided.</div>;
  }

  let data;
  try {
    data = await getOneBlData(code);
  } catch (err) {
    return <div>Failed to load data: {err.message}</div>;
  }

  return (
    <div className="w-full bg-[#F5F6FA]">
      <h1>Tracking Code: {code}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
