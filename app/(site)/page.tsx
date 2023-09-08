import { Button, Htag, Tag } from '@/components'

export default async function Home() {
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
		</main>
	)
}
