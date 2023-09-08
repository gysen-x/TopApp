import './globals.css'
import stls from './page.module.css'
import cn from 'classnames'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { Footer, Header, Sidebar } from '@/components'

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
			<body className={cn(inter.className, stls.wrapper)}>
				<Header className={stls.header} />
				<Sidebar className={stls.sidebar} />
				<div className={stls.body}>{children}</div>
				<Footer className={stls.footer} />
			</body>
		</html>
	)
}
