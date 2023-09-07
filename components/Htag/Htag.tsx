import IHtagProps from './Htag.props'
import stls from './Htag.module.css'

export const Htag = ({ tag, children }: IHtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={stls.h1}>{children}</h1>
		case 'h2':
			return <h2 className={stls.h2}>{children}</h2>
		case 'h3':
			return <h3 className={stls.h3}>{children}</h3>
		default:
			return <></>
	}
}
