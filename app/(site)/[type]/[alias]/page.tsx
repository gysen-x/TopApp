import { getMenu } from '@/api/menu'
import { getPageTopApp } from '@/api/pageTopApp'
import { getProduct } from '@/api/product'
import firstLevelMenu from '@/helpers/helpers'
import { Metadata } from 'next'
import { notFound, useParams } from 'next/navigation'

export const metadata: Metadata = {
	title: 'Product Page'
}

export default async function Course({
	params
}: {
	params: { alias: string; type: string }
}) {
	const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type)
	const page = await getPageTopApp(params.alias)
	if (!page || !firstCategoryItem) {
		notFound()
	}

	console.log('firstCategoryItem: ', firstCategoryItem)

	const products = await getProduct()

	return (
		<div>
			<p>Type - {params.type}</p>
			<p>Alias - {params.alias}</p>
			<p>courses length {products.length}</p>
		</div>
	)
}

export async function generateStaticParams() {
	let paths: { type: string; alias: string }[] = []
	for (const m of firstLevelMenu) {
		const menu = await getMenu(m.id)
		const menuPaths = menu.flatMap(s =>
			s.pages.map(p => ({ type: m.route, alias: p.alias }))
		)
		paths = paths.concat(menuPaths)
	}
	return paths
}
