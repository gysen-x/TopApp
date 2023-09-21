import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface SearchIconProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	width?: string | number
	height?: string | number
}
