import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface IPProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	size?: 's' | 'm' | 'l'
	children: ReactNode
}
