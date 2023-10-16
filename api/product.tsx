import { API } from '@/app/api'
import { ProductModel } from '@/interfaces/product.interface'

export const getProduct = async (category: string): Promise<ProductModel[]> => {
	const res = await fetch(API.product.find, {
		method: 'POST',
		body: JSON.stringify({
			category: category,
			limit: 10
		}),
		headers: new Headers({ 'Content-Type': 'application/json' })
	})
	return res.json()
}
