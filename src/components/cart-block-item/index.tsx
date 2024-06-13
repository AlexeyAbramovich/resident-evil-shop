import { CloseCircleOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { removeGameFromCart } from '../../redux/cartSlice'
import './cart-block-item.scss'
import { GameInfo } from '../../api/api'
import { setCurrentGame } from '../../redux/currentGameSlice'
import { useNavigate } from 'react-router-dom'

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
    <li className="cart-block__item" onClick={showCurrentGame}>
      <span className="item__name">{game.name}</span>
      <span className="item__price">{game.price}$</span>
      <img className="item__img" src={game.img} />
      <CloseCircleOutlined className="item__delete-btn" onClick={handleClick} />
    </li>
  )
}
