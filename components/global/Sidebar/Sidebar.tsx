import stls from './Sidebar.module.css'
import { Menu } from '../Menu/Menu'
import ISidebarProps from './Sidebar.props'

export const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
	return (
		<div className={stls.wrapper} {...props}>
			<p>Sidebar</p>
			<Menu />
		</div>
	)
}
