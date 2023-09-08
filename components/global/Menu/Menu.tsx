import stls from './Menu.module.css'
import cn from 'classnames'
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface'
import {
	BooksIcon,
	CoursesIcon,
	ProductsIcon,
	ServicesIcon
} from '@/components/global/Sidebar/components'
import { TopLevelCategory } from '@/interfaces/page.interface'
import { getMenu } from '@/api/menu'

const firstCategory = 0

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <CoursesIcon />,
		id: TopLevelCategory.Courses
	},
	{
		route: 'services',
		name: 'Сервисы',
		icon: <ServicesIcon />,
		id: TopLevelCategory.Services
	},
	{
		route: 'books',
		name: 'Книги',
		icon: <BooksIcon />,
		id: TopLevelCategory.Books
	},
	{
		route: 'products',
		name: 'Продукты',
		icon: <ProductsIcon />,
		id: TopLevelCategory.Products
	}
]

export const Menu = async () => {
	const menu = await getMenu(0)

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<a href={`/${m.route}`}>
							<div
								className={cn(stls.firstLevel, {
									[stls.firstLevelActive]: m.id === firstCategory
								})}>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</a>
						{m.id === firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		)
	}

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={stls.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={stls.secondLevel}>{m._id.secondCategory}</div>
						<div
							className={cn(stls.secondLevelBlock, {
								[stls.secondLevelBlockOpened]: m.isOpened
							})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		)
	}

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map(p => (
			<a
				key={p._id}
				className={cn(stls.thirdLevel, {
					[stls.thirdLevelActive]: false
				})}
				href={`/${route}/${p.alias}`}>
				{p.category}
			</a>
		))
	}

	return <div className={stls.menu}>{buildFirstLevel()}</div>
}
