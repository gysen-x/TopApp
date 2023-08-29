import { IButtonProps } from './Button.props'
import stls from './Button.module.css'
import cn from 'classnames'
import { ArrowIcon } from '..'

export const Button = ({
	children,
	appearance,
	className,
	arrow = 'none',
	...props
}: IButtonProps): JSX.Element => {
	return (
		<button
			className={cn(
				stls.button,
				className,
				{ [stls.primary]: appearance === 'primary' },
				{ [stls.ghost]: appearance === 'ghost' }
			)}
			{...props}>
			{children}
			{arrow !== 'none' && (
				<span className={cn(stls.arrow, { [stls.down]: arrow === 'down' })}>
					<ArrowIcon />
				</span>
			)}
		</button>
	)
}
