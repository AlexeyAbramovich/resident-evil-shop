import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

export const useHomePage = () => {
	const gamesData = useSelector((state: RootState) => state.games)
	const filter = useSelector((state: RootState) => state.filter.filter)

	return { gamesData, filter }
}
