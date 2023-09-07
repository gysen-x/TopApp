'use client'

import { Button, Htag, Rating, Tag } from '../components'
import { useState } from 'react'

export default function Home(): JSX.Element {
	const [state, setState] = useState<number>(4)

	return (
		<main>
			<Htag tag='h1'>Title</Htag>
			<Button appearance='primary' arrow='right'>
				Button
			</Button>
			<Htag tag='h2'>Subtitle</Htag>
			<Button appearance='ghost' arrow='down'>
				Button
			</Button>
			<Htag tag='h3'>Subsubtitle</Htag>
			<Tag size='s' color='red'>
				Small Red
			</Tag>

			<Rating rating={state} setRating={setState} isEditable />
		</main>
	)
}
