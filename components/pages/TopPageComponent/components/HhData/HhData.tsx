import stls from './HhData.module.css'
import HhDataProps from './HhData.props'
import { Card } from '@/components'
import RateBlock from './components/RateBlock'
import { priceRu } from '@/helpers/helpers'

export const HhData = ({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary
}: HhDataProps): JSX.Element => {
	return (
		<div className={stls.hh}>
			<Card className={stls.count}>
				<div className={stls.title}>Всего вакансий</div>
				<div className={stls.countValue}>{count}</div>
			</Card>
			<Card className={stls.salary}>
				<RateBlock
					className={stls.rateBlock}
					title={'Начальный'}
					salary={priceRu(juniorSalary)}
					rating={1}
				/>
				<RateBlock
					className={stls.rateBlock}
					title={'Средний'}
					salary={priceRu(middleSalary)}
					rating={2}
				/>
				<RateBlock
					className={stls.rateBlock}
					title={'Профессионал'}
					salary={priceRu(seniorSalary)}
					rating={3}
				/>
			</Card>
		</div>
	)
}
