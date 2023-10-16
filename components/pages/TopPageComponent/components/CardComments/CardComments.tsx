'use client'

import stls from './CardComments.module.css'
import cn from 'classnames'
import { CardCommentsProps } from './CardComments.props'

import React from 'react'
import { Card, Divider } from '@/components'
import Review from '../Review/Review'
import ReviewForm from '../ReviewForm/ReviewForm'

export default function CardComments({
	productId,
	reviews,
	isReviewOpen,
	className,
	...props
}: CardCommentsProps) {
	return (
		<div className={cn(className, stls.wrapper)} {...props}>
			<Card
				className={cn(stls.reviews, {
					[stls.opened]: isReviewOpen,
					[stls.closed]: !isReviewOpen
				})}
				color='blue'>
				{reviews.map(review => (
					<React.Fragment key={review._id}>
						<Review review={review} />
						<Divider />
					</React.Fragment>
				))}
				<ReviewForm productId={productId} />
			</Card>
		</div>
	)
}
