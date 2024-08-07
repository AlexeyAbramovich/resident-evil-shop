import { UnknownAction } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGames } from '../api/api'

export const useFetchGames = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchGames() as unknown as UnknownAction)
	}, [])
}
