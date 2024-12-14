import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    const path = url.searchParams.get("path") || "/";

    console.log("Revalidating path:", path);

    // Trigger revalidation for the specified path
    revalidatePath(path);

    return NextResponse.json({ revalidated: true });
  } catch (error: unknown) {
    console.error("Revalidation failed:", error);
    return NextResponse.json(
      { revalidated: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
