import stls from './Menu.module.css'
import { getMenu } from '@/api/menu'
import FirstLevel from './components/FirstLevel'

const firstCategory = 0

export const Menu = async () => {
	const menu = await getMenu(firstCategory)

	return (
		<div className={stls.menu}>
			{<FirstLevel firstCategory={firstCategory} menu={menu} />}
		</div>
	)
}
