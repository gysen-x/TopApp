import stls from './Divider.module.css'
import cn from 'classnames'
import DividerProps from './Divider.props'

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
	return <hr className={cn(stls.hr, className)} {...props} />
}
