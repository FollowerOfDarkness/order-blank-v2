import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;
  console.log(url, cookies);
}

// export const config = {
//   matcher: "/:path*",
// };
export const config = {
  matcher: ["/login/:path", "/dashboard/:path*"],
};
