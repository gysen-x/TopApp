import stls from '../Menu.module.css'
import cn from 'classnames'
import Link from 'next/link'

import { firstLevelMenu } from '@/helpers/helpers'
import { MenuItem } from '@/interfaces/menu.interface'
import SecondLevel from './SecondLevel'

export default function FirstLevel({
	firstCategory,
	menu
}: {
	firstCategory: number
	menu: MenuItem[]
}) {
	return (
		<>
			{firstLevelMenu.map(firstLevelItem => (
				<div key={firstLevelItem.route}>
					<Link href={`/${firstLevelItem.route}`}>
						<div
							className={cn(stls.firstLevel, {
								[stls.firstLevelActive]: firstLevelItem.id === firstCategory
							})}>
							{firstLevelItem.icon}
							<span>{firstLevelItem.name}</span>
						</div>
					</Link>
					{firstLevelItem.id === firstCategory && (
						<SecondLevel menu={menu} firstLevelItem={firstLevelItem} />
					)}
				</div>
			))}
		</>
	)
}
