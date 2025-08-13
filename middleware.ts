import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/", "/about", "/products", "/contact", "/favorites"];
const publicRoutes = ["/login", "/register", "/forgot-password"];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get("token")?.value;
    if (publicRoutes.includes(pathname) && token) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    const isProtected =
        pathname === "/" ||
        protectedRoutes.some((route) => route !== "/" && pathname.startsWith(route));


    if (isProtected && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|api|favicon.ico).*)"],
};
