import { FirstLevelMenuItem } from '@/interfaces/menu.interface'
import {
	BooksIcon,
	CoursesIcon,
	ProductsIcon,
	ServicesIcon
} from '@/components/global/Sidebar/components'
import { TopLevelCategory } from '@/interfaces/page.interface'
import { getMenu } from '@/api/menu'

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

	const buildFirstLevel = () => {}

	const buildSecondLevel = () => {}

	const buildThirdLevel = () => {}

	return (
		<div>
			<ServicesIcon />
			<ProductsIcon />
			<CoursesIcon />
			<BooksIcon />
			{menu.length}
		</div>
	)
}
