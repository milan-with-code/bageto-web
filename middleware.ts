import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/", "/about", "/products", "/contact", "/favorites"];
const publicRoutes = ["/auth/login", "/auth/register", "/auth/forgot-password"];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    const isProtected =
        pathname === "/" ||
        protectedRoutes.some((route) => route !== "/" && pathname.startsWith(route));

    const token = request.cookies.get("token")?.value;

    if (isProtected && !token) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|api|favicon.ico).*)"],
};
