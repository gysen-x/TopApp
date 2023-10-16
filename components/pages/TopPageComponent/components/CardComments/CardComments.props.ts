import { ReviewModel } from '@/interfaces/product.interface'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface CardCommentsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	productId: string
	reviews: ReviewModel[]
	isReviewOpen: boolean
}
