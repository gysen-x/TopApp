import stls from '../Menu.module.css'
import cn from 'classnames'
import Link from 'next/link'
import firstLevelMenu from '@/helpers/helpers'

export default function FirstLevel({
	firstCategory
}: {
	firstCategory: number
}): JSX.Element {
	return (
		<>
			{firstLevelMenu.map(m => (
				<div key={m.route}>
					<Link href={`/${m.route}`}>
						<div
							className={cn(stls.firstLevel, {
								[stls.firstLevelActive]: m.id === firstCategory
							})}>
							{m.icon}
							<span>{m.name}</span>
						</div>
					</Link>
					{/* {m.id === firstCategory && buildSecondLevel(m)} */}
				</div>
			))}
		</>
	)
}
