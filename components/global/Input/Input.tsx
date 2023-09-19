import stls from './Input.module.css'
import cn from 'classnames'
import InputProps from './Input.props'

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
	return <input className={cn(className, stls.input)} {...props} />
}
