import stls from './Footer.module.css'
import cn from 'classnames'
import IFooterProps from './Footer.props'
import Link from 'next/link'
import { format } from 'date-fns'

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
	return (
		<footer className={cn(className, stls.footer)} {...props}>
			<div className={stls.reservedRights}>
				OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
			</div>
			<Link className={stls.userAgreement} href='/'>
				Пользовательское соглашение
			</Link>
			<Link className={stls.privacyPolicy} href='/'>
				Политика конфиденциальности
			</Link>
		</footer>
	)
}
