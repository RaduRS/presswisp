import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const urlPath = req.nextUrl.pathname;
  const { userId } = await auth();

  if (
    (urlPath.startsWith("/editor") && !userId) ||
    (urlPath.startsWith("/api/upload-image") && !userId)
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/editor",
    "/api/upload-image", // Keep this for specific API routes needing auth
    "/((?!_next|api/graphql|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
