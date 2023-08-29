import { Metadata } from 'next'
import { Button, Htag } from '../components'

export async function generateMetadata(): Promise<Metadata> {
	const desc = 'You can change the metadata by data from API'
	return {
		title: 'Computed Metadata',
		description: desc
	}
}

export default function Home(): JSX.Element {
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
		</main>
	)
}
