import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IStarIconProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	fill?: string
	width?: string | number
	height?: string | number
}
