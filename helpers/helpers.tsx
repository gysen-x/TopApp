import {
	BooksIcon,
	CoursesIcon,
	ProductsIcon,
	ServicesIcon
} from '@/components/global/Sidebar/components'
import { FirstLevelMenuItem } from '@/interfaces/menu.interface'
import { TopLevelCategory } from '@/interfaces/page.interface'
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

export default firstLevelMenu
