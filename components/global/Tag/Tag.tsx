import stls from './Tag.module.css'
import IPProps from './Tag.props'
import cn from 'classnames'

export const Tag = ({
	children,
	size = 's',
	color = 'ghost',
	href,
	className,
	...props
}: IPProps): JSX.Element => {
	return (
		<div
			className={cn(stls.tag, className, {
				[stls.m]: size === 'm',
				[stls.s]: size === 's',
				[stls.ghost]: color === 'ghost',
				[stls.green]: color === 'green',
				[stls.grey]: color === 'grey',
				[stls.primary]: color === 'primary',
				[stls.red]: color === 'red'
			})}
			{...props}>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	)
}
