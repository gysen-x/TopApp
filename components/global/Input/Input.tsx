import stls from './Input.module.css'
import cn from 'classnames'
import { InputProps } from './types'

import { ForwardedRef, forwardRef } from 'react'

export const Input = forwardRef(
	(
		{ className, error, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className={stls.inputWrapper}>
				<input
					className={cn(className, stls.input, {
						[stls.error]: error
					})}
					ref={ref}
					{...props}
				/>
				{error && <span className={stls.errorMessage}>{error.message}</span>}
			</div>
		)
	}
)

Input.displayName = 'Input'
