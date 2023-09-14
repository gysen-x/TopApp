import firstLevelMenu from '@/helpers/helpers'
import { notFound } from 'next/navigation'

export default function page({ params }: { params: { type: string } }) {
	const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type)
	if (!firstCategoryItem) notFound()

	return (
		<div>
			First category Type page
			<p>First category [type] - {params.type}</p>
		</div>
	)
}

export async function generateStaticParams() {
	let paths: { type: string }[] = []

	const firstLevelPaths = firstLevelMenu.map(item => ({
		type: item.route
	}))
	paths = paths.concat(firstLevelPaths)
	return paths
}
