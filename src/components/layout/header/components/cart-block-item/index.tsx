import { CloseCircleOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GameInfo } from '../../../../../api/api'
import { removeGameFromCart } from '../../../../../redux/cartSlice'
import { setCurrentGame } from '../../../../../redux/currentGameSlice'
import './cart-block-item.scss'

type Props = {
	game: GameInfo
}

export const CartBlockItem = ({ game }: Props) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = (e: any) => {
		e.stopPropagation()
		dispatch(removeGameFromCart(game.name))
	}

	const showCurrentGame = () => {
		dispatch(setCurrentGame(game))
		navigate(`/game/${game.name}`)
	}

	return (
		<li className='cart-block-item' onClick={showCurrentGame}>
			<span className='cart-block-item__name'>{game.name}</span>
			<span className='cart-block-item__price'>{game.price}$</span>
			<img className='cart-block-item__img' src={game.img} />
			<CloseCircleOutlined
				className='cart-block-item__delete-btn'
				onClick={handleClick}
			/>
		</li>
	)
}
