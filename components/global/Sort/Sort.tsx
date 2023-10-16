'use client'

import stls from './Sort.module.css'
import cn from 'classnames'
import { SortEnum, SortProps } from './Sort.props'

import { SortIcon } from '../../icons/SortIcon/SortIcon'

export function Sort({ sort, setSort, className, ...props }: SortProps) {
	return (
		<div className={cn(stls.sort, className)} {...props}>
			<span
				className={cn({ [stls.active]: sort === SortEnum.Rating })}
				onClick={() => setSort(SortEnum.Rating)}>
				<SortIcon className={stls.sortIcon} />
				По рейтингу
			</span>
			<span
				className={cn({ [stls.active]: sort === SortEnum.Price })}
				onClick={() => setSort(SortEnum.Price)}>
				<SortIcon className={stls.sortIcon} />
				По цене
			</span>
		</div>
	)
}
