import { API } from '@/app/api'
import { TopPageModel } from '@/interfaces/page.interface'

export const getPageTopApp = async (alias: string): Promise<TopPageModel | null> => {
	const res = await fetch(`${API.topPage.byAlias}/${alias}`)
	if (!res.ok) {
		return null
	}
	return res.json()
}
