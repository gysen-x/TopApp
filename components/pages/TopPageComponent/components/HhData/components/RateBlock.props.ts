import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface RateBlockProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string
	salary: string
	rating: number
}
