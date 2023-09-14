import stls from '../Menu.module.css'
import cn from 'classnames'

import Link from 'next/link'
import { PageItem } from '@/interfaces/menu.interface'
import { usePathname } from 'next/navigation'

export default function ThirdLevel({
	pages,
	route
}: {
	pages: PageItem[]
	route: string
}) {
	const pathName = usePathname()

	return (
		<>
			{pages.map(p => (
				<Link
					key={p._id}
					className={cn(stls.thirdLevel, {
						[stls.thirdLevelActive]: `/${route}/${p.alias}` === pathName
					})}
					href={`/${route}/${p.alias}`}>
					{p.category}
				</Link>
			))}
		</>
	)
}
