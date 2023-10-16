import { Button, Htag, Input, Textarea } from '@/components'
import Rating from '@/components/global/Rating/Rating'

export default function Home() {
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

			<Input />
			<Textarea />

			<Rating rating={4} isEditable />
		</main>
	)
}
