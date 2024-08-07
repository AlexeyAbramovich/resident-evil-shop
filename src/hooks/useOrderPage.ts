import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeAllGamesFromCart } from '../redux/cartSlice'
import { RootState } from '../redux/store'

export const useOrderPage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const gamesInCart = useSelector((state: RootState) => state.cart)
	const orderId = Math.floor(Math.random() * 10000)

	useEffect(() => {
		if (gamesInCart.length === 0) {
			navigate('/')
		}
		window.scrollTo({ top: 0, behavior: 'instant' })
	})

	const handleClick = () => {
		dispatch(removeAllGamesFromCart())
		navigate('/')
	}

	return { orderId, handleClick }
}
