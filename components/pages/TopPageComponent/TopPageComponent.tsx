import stls from './TopPageComponent.module.css'
import { TopPageComponentProps } from './TopPageComponent.props'

import { Htag, P, Tag } from '@/components'
import { TopLevelCategory } from '@/interfaces/page.interface'
import { HhData } from './components/HhData/HhData'
import Advantages from './components/Advantages/Advantages'

export default function TopPageComponent({
	page,
	products,
	firstCategory
}: TopPageComponentProps) {
	return (
		<div className={stls.wrapper}>
			<div className={stls.title}>
				<Htag tag='h1'> {page.title}</Htag>
				{products && (
					<Tag color='grey' size='m'>
						{products.length}
					</Tag>
				)}
				<span>Sorting</span>
			</div>
			<div>
				{products && products.map(p => <div key={p._id}>{p.title}</div>)}
			</div>

			<div className={stls.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>
					hh.ru
				</Tag>
			</div>
			{firstCategory === TopLevelCategory.Courses && page.hh && (
				<HhData {...page.hh} />
			)}
			{page.advantages && (
				<>
					<Htag tag='h2'>Преимущества</Htag>
					<Advantages {...page.advantages} />
				</>
			)}
			{page.seoText && <P>{page.seoText}</P>}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => (
				<Tag key={t} color='primary'>
					{t}
				</Tag>
			))}
		</div>
	)
}
