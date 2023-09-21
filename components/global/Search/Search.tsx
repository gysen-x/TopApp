'use client'

import stls from './Search.module.css'
import cn from 'classnames'
import SearchProps from './Search.props'

import { Input } from '../Input/Input'
import { Button } from '@/components'
import { useState } from 'react'
import SearchIcon from '@/components/icons/SearchIcon/SearchIcon'
import { useRouter } from 'next/navigation'

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [searchState, setSearchState] = useState<string>('')
	const router = useRouter()

	const goToSearch = () => {
		router.push(`/search?q=${searchState}`)
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			goToSearch()
		}
	}

	return (
		<div className={cn(className, stls.search)} {...props}>
			<Input
				className={stls.input}
				placeholder='Поиск...'
				value={searchState}
				onChange={e => setSearchState(e.target.value)}
				onKeyDown={handleKeyDown}
			/>

			<Button className={stls.button} appearance='primary' onClick={goToSearch}>
				<SearchIcon />
			</Button>
		</div>
	)
}
