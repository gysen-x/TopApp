import { Menu } from '../Menu/Menu'
import stls from './Sidebar.module.css'
import ISidebarProps from './Sidebar.props'
import { BooksIcon, CoursesIcon, ServicesIcon } from './components'
import ProductsIcon from './components/icons/ProductsIcon'

export const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
	return (
		<div className={stls.wrapper} {...props}>
			<p>Sidebar</p>
			<Menu />
		</div>
	)
}
