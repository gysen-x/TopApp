import stls from '../HhData.module.css'
import RateBlockProps from './RateBlock.props'

import { RateIcon } from '@/components'

export default function RateBlock({
	title,
	salary,
	rating,
	className,
	...props
}: RateBlockProps) {
	return (
		<div className={className} {...props}>
			<div className={stls.title}>{title}</div>
			<div className={stls.salaryValue}>{salary}</div>
			<div className={stls.rate}>
				<RateIcon filled={rating >= 1} />
				<RateIcon filled={rating >= 2} />
				<RateIcon filled={rating >= 3} />
			</div>
		</div>
	)
}
