import { getMenu } from '@/api/menu'
import firstLevelMenu from '@/helpers/helpers'

export default function page({ params }: { params: { type: string } }) {
	// const menu = getMenu(0)
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
