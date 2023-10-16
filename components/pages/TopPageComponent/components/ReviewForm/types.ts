import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ReviewFormProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	productId: string
}

export type ReviewFormType = {
	name: string
	title: string
	description: string
	rating: number
}
