'use client'

import stls from './Rating.module.css'
import cn from 'classnames'
import RatingProps from './Rating.props'

import React, {
	useEffect,
	useState,
	KeyboardEvent,
	forwardRef,
	ForwardedRef
} from 'react'
import { StarRatingIcon } from '@/components'

const Rating = forwardRef(
	(
		{ isEditable = false, rating, setRating, className, ...props }: RatingProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
			new Array(5).fill(<></>)
		)

		useEffect(() => {
			constructRating(rating)
		}, [rating])

		const changeDisplay = (i: number) => {
			if (!isEditable) {
				return
			}
			constructRating(i)
		}

		const onClick = (i: number) => {
			if (!isEditable || !setRating) {
				return
			}
			setRating(i)
		}

		const handleSpace = (i: number, e: KeyboardEvent) => {
			if (e.keyCode !== 32 || !setRating) {
				return
			}
			setRating(i)
		}

		const constructRating = (currentRating: number) => {
			const updatedArray = ratingArray.map((r: JSX.Element, idx: number) => {
				return (
					<StarRatingIcon
						key={idx}
						className={cn(stls.star, {
							[stls.filled]: idx < currentRating,
							[stls.editable]: isEditable
						})}
						onMouseEnter={() => changeDisplay(idx + 1)}
						onMouseLeave={() => {
							changeDisplay(rating)
						}}
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

		return (
			<div className={cn(stls.ratingWrapper, className)} ref={ref} {...props}>
				{ratingArray.map((r, idx) => (
					<span key={idx}>{r}</span>
				))}
			</div>
		)
	}
)

Rating.displayName = 'Rating'

export default Rating
