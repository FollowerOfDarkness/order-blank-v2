import { DASHBOARD_PAGES } from '@/shared/lib/pages-url.config'
import { EnumTokens } from '@/shared/types'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	const isDashboardPage = url.includes('/lk')
	const isLoginPage = url.includes('/login')

	if (isLoginPage && refreshToken) {
		return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
	}

	if (isLoginPage) {
		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL('/login', url))
	}
	return NextResponse.next()
}

// export const config = {
//   matcher: "/:path*",
// };
export const config = {
	matcher: ['/login/:path', '/lk/:path*']
}
