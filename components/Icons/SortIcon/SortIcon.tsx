import { SortIconProps } from './SortIcon.props'

export function SortIcon({
	width = '20',
	height = '13',
	className,
	...props
}: SortIconProps) {
	return (
		<div className={className} {...props}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={width}
				height={height}
				viewBox='0 0 20 13'
				fill='#7653FC'>
				<rect width='20' height='3' rx='1.5' />
				<rect y='5' width='14' height='3' rx='1.5' />
				<rect y='10' width='8' height='3' rx='1.5' />
			</svg>
		</div>
	)
}
