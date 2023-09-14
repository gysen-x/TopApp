import { API } from '@/app/api'
import { TopPageModel } from '@/interfaces/page.interface'

export const getPageTopApp = async (
	alias: string
): Promise<TopPageModel | null> => {
	try {
		const pages = ['targeting', 'python', 'copywriting', 'qa']
		if (pages.includes(alias)) {
			return null
		}
		const res = await fetch(`${API.topPage.byAlias}/${alias}`)
		return res.json()
	} catch (error) {
		console.error(`Error while fetching page data for alias ${alias}:`, error)
		return null // Возвращаем null в случае ошибки
	}
}
