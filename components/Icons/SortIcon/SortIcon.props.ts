import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface SortIconProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	width?: string | number
	height?: string | number
}
