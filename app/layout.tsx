import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

const inter = Noto_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
	title: 'TopApp',
	description: 'This application helps you to find the best course'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}): JSX.Element {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
