// /app/api/send-contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbydKwb5nipi7kQnZzoRW5T1i7haSmswyiJ6OQhxEGpYeqKCWo1dMEZzg2HT3ji-9rDkVw/exec";
  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    return NextResponse.json(json);
  } catch (err) {
    return NextResponse.json(
      { error: "Error enviando datos", detail: err },
      { status: 500 }
    );
  }
}
