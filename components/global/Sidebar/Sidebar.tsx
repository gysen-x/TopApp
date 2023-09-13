import stls from './Sidebar.module.css'
import cn from 'classnames'
import ISidebarProps from './Sidebar.props'

import { Menu } from '../Menu/Menu'
import Logo from '@/public/Logo.svg'
import Image from 'next/image'

export const Sidebar = ({
	className,
	...props
}: ISidebarProps): JSX.Element => {
	return (
		<div className={cn(stls.sidebar, className)} {...props}>
			<Image
				className={stls.logo}
				src={Logo}
				width='159'
				height='44'
				alt='Logo'
			/>
			<div className={stls.search}>Search</div>
			<Menu />
		</div>
	)
}
