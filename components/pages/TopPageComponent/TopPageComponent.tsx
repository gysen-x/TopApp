import stls from './TopPageComponent.module.css'
import { TopPageComponentProps } from './TopPageComponent.props'

import { Htag, Tag } from '@/components'
import { TopLevelCategory } from '@/interfaces/page.interface'
import { HhData } from './components/HhData/HhData'
import Advantages from './components/Advantages/Advantages'
import Products from './components/Products/Products'

export default function TopPageComponent({
	page,
	products,
	firstCategory
}: TopPageComponentProps) {
	return (
		<div className={stls.wrapper}>
			<Products page={page} products={products} />
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
			{page.seoText && (
				<div
					className={stls.seo}
					dangerouslySetInnerHTML={{ __html: page.seoText }}></div>
			)}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(tag => (
				<Tag key={tag} color='primary'>
					{tag}
				</Tag>
			))}
		</div>
	)
}
