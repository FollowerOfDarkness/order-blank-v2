import type { Metadata } from "next";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import { Provider } from 'react-redux';



// import { store } from "./model/store";
import StoreProvider from './StoreProvider';
import './styles/globals.scss';
import { inter } from '@/shared/fonts/fonts';
import { SITE_NAME } from '@/shared/lib/seo.constants';



export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Service for creating orders'
}

export function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<StoreProvider>
			<html lang='ru'>
				<body className={inter.variable}>{children}</body>
			</html>
		</StoreProvider>
	)
}