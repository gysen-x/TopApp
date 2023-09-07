import stls from './Header.module.css'
import cn from 'classnames'
import IHeaderProps from './Header.props'

export const Header = ({ ...props }: IHeaderProps): JSX.Element => {
	return (
		<div className={stls.wrapper} {...props}>
			Header
		</div>
	)
}
