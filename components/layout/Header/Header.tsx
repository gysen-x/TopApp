import stls from './Header.module.css'
import IHeaderProps from './Header.props'

export const Header = ({ ...props }: IHeaderProps): JSX.Element => {
	return (
		<div className={stls.wrapper} {...props}>
			Header
		</div>
	)
}
