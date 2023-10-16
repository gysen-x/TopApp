'use client'

import stls from './ReviewForm.module.css'
import cn from 'classnames'
import { ReviewFormProps, ReviewFormType } from './types'

import { Button, CloseIcon, Input, Rating, Textarea } from '@/components'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

export default function ReviewForm({
	productId,
	className,
	...props
}: ReviewFormProps) {
	const [rating, setRating] = useState(0)

	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<ReviewFormType>()

	const onSubmit = (data: ReviewFormType) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(className, stls.reviewForm)} {...props}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните имя' }
					})}
					placeholder='Имя'
					error={errors.name}
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Заполните заголовок' }
					})}
					className={stls.title}
					placeholder='Заголовок отзыва'
					error={errors.title}
				/>
				<div className={stls.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name={'rating'}
						render={({ field }) => (
							<Rating
								rating={field.value}
								setRating={field.onChange}
								isEditable
								ref={field.ref}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description')}
					placeholder='Текст отзыва'
					className={stls.description}
				/>
				<div className={stls.submit}>
					<Button appearance='primary'>Отправить</Button>
					<span className={stls.info}>
						*Перед публикацией отзыв пройдёт предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			<div className={stls.success}>
				<div className={stls.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, ваш отзыв будет опубликован после проверки</div>
				<CloseIcon className={stls.close} />
			</div>
		</form>
	)
}
