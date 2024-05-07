import type { PropsWithChildren } from 'react'

import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className='grid min-h-screen grid-cols-[1.2fr_6fr] 2xl:grid-cols-[1.1fr_6fr]'>
			<Sidebar />

			<main className='p-big-layout relative max-h-screen overflow-x-hidden'>
				<Header />
				{children}
			</main>
		</div>
	)
}
