import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${req.cookies.get("JYMXcZ3TpR81fbv2")?.value}`
        },
        body: JSON.stringify({
            query: `
            query GET_PROFILE {
              getProfile {
                role
              }
            }`
        }),
        cache: "no-store"
    });

    const { data } = await response.json();

    const pathname = req.nextUrl.pathname;

    if (!data?.getProfile && pathname !== "/login") {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    if (data?.getProfile && pathname === "/login") {
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
