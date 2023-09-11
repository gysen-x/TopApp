import stls from './Menu.module.css'
// import cn from 'classnames'
// import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface'
// import { getMenu } from '@/api/menu'
// import Link from 'next/link'
import FirstLevel from './components/FirstLevel'

const firstCategory = 0

export const Menu = async () => {
	// const menu = await getMenu(0)

	// const buildFirstLevel = () => {
	// 	return (
	// 		<>
	// 			{firstLevelMenu.map(m => (
	// 				<div key={m.route}>
	// 					<Link href={`/${m.route}`}>
	// 						<div
	// 							className={cn(stls.firstLevel, {
	// 								[stls.firstLevelActive]: m.id === firstCategory
	// 							})}>
	// 							{m.icon}
	// 							<span>{m.name}</span>
	// 						</div>
	// 					</Link>
	// 					{m.id === firstCategory && buildSecondLevel(m)}
	// 				</div>
	// 			))}
	// 		</>
	// 	)
	// }

	// const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
	// 	return (
	// 		<div className={stls.secondBlock}>
	// 			{menu.map(m => (
	// 				<div key={m._id.secondCategory}>
	// 					<div className={stls.secondLevel}>{m._id.secondCategory}</div>
	// 					<div
	// 						className={cn(stls.secondLevelBlock, {
	// 							[stls.secondLevelBlockOpened]: m.isOpened
	// 						})}>
	// 						{buildThirdLevel(m.pages, menuItem.route)}
	// 					</div>
	// 				</div>
	// 			))}
	// 		</div>
	// 	)
	// }

	// const buildThirdLevel = (pages: PageItem[], route: string) => {
	// 	return pages.map(p => (
	// 		<Link
	// 			key={p._id}
	// 			className={cn(stls.thirdLevel, {
	// 				[stls.thirdLevelActive]: false
	// 			})}
	// 			href={`/${route}/${p.alias}`}>
	// 			{p.category}
	// 		</Link>
	// 	))
	// }

	return (
		<div className={stls.menu}>
			{<FirstLevel firstCategory={firstCategory} />}
		</div>
	)
}
