'use client'

import stls from './Products.module.css'
import cn from 'classnames'
import ProductsProps from './Products.props'

import { SortEnum } from '@/components/global/Sort/Sort.props'
import { Htag, Sort, Tag } from '@/components'
import { useReducer } from 'react'
import { sortReducer } from '../../reducers/sort.reducer'

export default function Products({
	products,
	page,
	className,
	...props
}: ProductsProps) {
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
		sortReducer,
		{
			products,
			sort: SortEnum.Rating
		}
	)

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort })
	}

	return (
		<div className={cn(stls.wrapper, className)} {...props}>
			<div className={stls.title}>
				<Htag tag='h1'> {page.title}</Htag>
				{products && (
					<Tag color='gray' size='m'>
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortedProducts &&
					sortedProducts.map(p => <div key={p._id}>{p.title}</div>)}
			</div>
		</div>
	)
}
