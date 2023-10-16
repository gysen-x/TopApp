import stls from './Textarea.module.css'
import cn from 'classnames'
import TextareaProps from './Textarea.props'

import { ForwardedRef, forwardRef } from 'react'

export const Textarea = forwardRef(
	(
		{ className, ...props }: TextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<textarea className={cn(className, stls.input)} ref={ref} {...props} />
		)
	}
)

Textarea.displayName = 'Textarea'
