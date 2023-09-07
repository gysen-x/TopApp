'use client'

import stls from './Rating.module.css'
import cn from 'classnames'
import IRatingProps from './Rating.props'
import { KeyboardEvent, useEffect, useState } from 'react'
import { StarIcon } from '..'

export const Rating = ({
	isEditable = false,
	rating,
	setRating,
	...props
}: IRatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
		new Array(5).fill(<></>)
	)

	useEffect(() => {
		cunstructRating(rating)
	}, [rating])

	const cunstructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, idx: number) => {
			return (
				<StarIcon
					key={idx}
					className={cn(stls.star, {
						[stls.fill]: idx < currentRating,
						[stls.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(idx + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(idx + 1)}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent) =>
						isEditable && handleSpace(idx + 1, e)
					}
				/>
			)
		})
		setRatingArray(updatedArray)
	}

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return
		}
		cunstructRating(i)
	}

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return
		}
		setRating(i)
	}

	const handleSpace = (i: number, e: KeyboardEvent) => {
		if (e.code !== 'Space' || !setRating) {
			return
		}
		setRating(i)
	}

	return (
		<div className={stls.wrapper} {...props}>
			{ratingArray.map((r, idx) => (
				<span key={idx}>{r}</span>
			))}
		</div>
	)
}
