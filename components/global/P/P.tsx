import stls from './P.module.css'
import cn from 'classnames'
import IPProps from './P.props'

export const P = ({
	children,
	size = 'm',
	className,
	...props
}: IPProps): JSX.Element => {
	return (
		<p
			className={cn(stls.p, className, {
				[stls.small]: size === 's',
				[stls.medium]: size === 'm',
				[stls.large]: size === 'l'
			})}
			{...props}>
			{children}
		</p>
	)
}
