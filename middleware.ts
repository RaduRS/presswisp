import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const urlPath = req.nextUrl.pathname;

  const { userId } = await auth();

  // Redirect unauthenticated users accessing `/editor` to `/`
  if (urlPath === "/editor" && !userId) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Allow all other routes to proceed normally
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/editor",
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
