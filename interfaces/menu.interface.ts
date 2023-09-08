import { TopLevelCategory } from './page.interface'

export interface PageItem {
	alias: string
	titles: string
	_id: string
	category: string
}

export interface MenuItem {
	_id: {
		secondCategory: string
	}
	pages: PageItem[]
}

export interface FirstLevelMenuItem {
	route: string
	name: string
	icon: JSX.Element
	id: TopLevelCategory
}
