import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GameInfo } from '../api/api'
import { addGameToCart, removeGameFromCart } from '../redux/cartSlice'
import { setCurrentGame } from '../redux/currentGameSlice'
import { RootState } from '../redux/store'

export const useStoreItem = (game: GameInfo) => {
	const gamesInCart = useSelector((state: RootState) => state.cart)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleClick = (e: any) => {
		e.stopPropagation()
		if (!gamesInCart.includes(game)) {
			dispatch(addGameToCart(game))
		} else {
			dispatch(removeGameFromCart(game.name))
		}
	}

	const handleMoveToCurrentGamePage = () => {
		dispatch(setCurrentGame(game))
		navigate(`/game/${game.name}`)
	}

	return { gamesInCart, handleClick, handleMoveToCurrentGamePage }
}
