import { NextResponse } from "next/server";

export function middleware(request){

    let cookie = request.cookies.get("nextjs-cookie")
    console.log(cookie.value);

    const dummyData = {
        role: "admin",
        email: "admin@test.com"
    }
    let isServicesPage = request.nextUrl.pathname.startsWith("/services");
    let isAdmin = dummyData.role === "admin"

    if(isServicesPage && !isAdmin){
        return NextResponse.redirect(new URL("/login", request.url))
    }

    return NextResponse.next()
}

// export const config = {
//     matcher: '/about/:path*'
// }