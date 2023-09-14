'use client'

import stls from '../Menu.module.css'
import cn from 'classnames'

import { FirstLevelMenuItem, MenuItem } from '@/interfaces/menu.interface'
import ThirdLevel from './ThirdLevel'
import { useParams } from 'next/navigation'
import { useRef } from 'react'

export default function SecondLevel({
	menu,
	firstLevelItem
}: {
	menu: MenuItem[]
	firstLevelItem: FirstLevelMenuItem
}) {
	const params = useParams()

	let alias: string
	if (typeof params.alias === 'string') {
		alias = params.alias
	}

	const secondLevelRefs = useRef([] as (HTMLDivElement | null)[])

	const toggleClass = (index: number) => {
		const element = secondLevelRefs.current[index]
		if (element) {
			element.classList.toggle('secondLevelBlockOpened')
		}
	}

	return (
		<div className={stls.secondBlock}>
			{menu.map((m, index) => {
				return (
					<div key={m._id.secondCategory}>
						<div
							className={stls.secondLevel}
							onClick={() => toggleClass(index)}>
							{m._id.secondCategory}
						</div>
						<div
							className={cn(stls.secondLevelBlock, {
								[stls.secondLevelBlockOpened]: m.pages
									.map(p => p.alias)
									.includes(alias)
							})}
							ref={el => (secondLevelRefs.current[index] = el)}>
							<ThirdLevel pages={m.pages} route={firstLevelItem.route} />
						</div>
					</div>
				)
			})}
		</div>
	)
}
