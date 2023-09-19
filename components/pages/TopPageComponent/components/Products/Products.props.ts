import { TopPageModel } from '@/interfaces/page.interface'
import { ProductModel } from '@/interfaces/product.interface'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface ProductsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	page: TopPageModel
	products: ProductModel[]
}
