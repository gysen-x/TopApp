import { getMenu } from '@/api/menu'
import { getPageTopApp } from '@/api/pageTopApp'
import { getProduct } from '@/api/product'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const firstCategory = 0

export const metadata: Metadata = {
	title: 'Product Page'
}

export default async function Course({
	params
}: {
	params: { alias: string }
}) {
	const page = await getPageTopApp(params.alias)
	if (!page) {
		notFound()
	}
	// const menu = await getMenu(firstCategory)
	// const paths = menu.flatMap(m => m.pages.map(p => `/courses/${p.alias}`))

	const products = await getProduct()

	return (
		<div>
			<p>{params.alias}</p>
			<p>courses length {products.length}</p>
		</div>
	)
}

export async function generateStaticParams() {
	const menu = await getMenu(firstCategory)

	return menu.flatMap(item =>
		item.pages.map(page => ({
			alias: page.alias
		}))
	)
}
