import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { readPayload, readPayloadJose } from "./lib/jwt";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/wishlist")) {
    const cookieAuth = cookies().get("Authorization");

    if (!cookieAuth?.value) {
      return NextResponse.json(
        { message: "Token invalid" },
        {
          status: 400,
        }
      );
    };

    const splitCookieAuth = cookieAuth.value.split(" ")[1];

    const decodeToken = await readPayloadJose<{
      _id: string;
      email: string;
    }>(splitCookieAuth);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", decodeToken._id);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    return response;
  }

  if (request.nextUrl.pathname.startsWith("/wishlist")) {
    const auth = cookies().get("Authorization")?.value;

    if(!auth) {
      request.nextUrl.pathname = "/login";
      return NextResponse.redirect(request.nextUrl);
    }
  }

  if (request.nextUrl.pathname.startsWith("/api/products")) {
    const cookieAuth = cookies().get("Authorization");

    if (!cookieAuth?.value) {
      return NextResponse.json(
        { message: "Token invalid" },
        {
          status: 400,
        }
      );
    }

    const splitCookieAuth = cookieAuth.value.split(" ")[1];

    const decodeToken = await readPayloadJose<{
      _id: string;
      email: string;
    }>(splitCookieAuth);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", decodeToken._id);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    return response;
  }

  if (request.nextUrl.pathname.startsWith("/products")) {
    const auth = cookies().get("Authorization")?.value;

    if(!auth) {
      request.nextUrl.pathname = "/login";
      return NextResponse.redirect(request.nextUrl);
    }
  }
}

export const config = {
  matcher: ["/api/wishlist/:path*", "/wishlist/:path*", "/api/products/:path*", "/products/:path*"]
};
