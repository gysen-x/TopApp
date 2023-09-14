import stls from './Card.module.css'
import cn from 'classnames'
import CardProps from './Card.props'

export const Card = ({
	children,
	color = 'white',
	className,
	...props
}: CardProps): JSX.Element => {
	return (
		<div
			className={cn(stls.card, className, {
				[stls.blue]: color === 'blue'
			})}
			{...props}>
			{children}
		</div>
	)
}
