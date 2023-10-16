import stls from './Review.module.css'
import cn from 'classnames'
import ReviewProps from './Review.props'

import UserIcon from '@/components/icons/UserIcon/UserIcon'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Rating } from '@/components'

export default function Review({ review, className, ...props }: ReviewProps) {
	const { name, title, description, createdAt, rating } = review

	return (
		<div className={cn(className, stls.review)} {...props}>
			<UserIcon className={stls.user} />
			<div className={stls.title}>
				<span className={stls.name}>{name}:</span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={stls.date}>
				{format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
			</div>
			<div className={stls.rating}>
				<span>
					<Rating rating={rating} />
				</span>
			</div>
			<div className={stls.description}>{description}</div>
		</div>
	)
}
