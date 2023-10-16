import stls from './RatingStar.module.css'
import cn from 'classnames'
import { RatingStarProps } from './types'

import React from 'react'

export const RatingStar = ({ className }: RatingStarProps) => {
	return <div className={cn(className, stls.ratingStar)}>RatingStar</div>
}
