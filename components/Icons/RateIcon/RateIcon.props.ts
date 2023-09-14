import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface RateIconProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	filled: boolean
	width?: string | number
	height?: string | number
}
