import { useDispatch, useSelector } from 'react-redux'
import { Rating } from '../rating'
import { RootState } from '../../redux/store'
import { addGameToCart, removeGameFromCart } from '../../redux/cartSlice'
import { GameInfo } from '../../api/api'
import './store-item.scss'
import { setCurrentGame } from '../../redux/currentGameSlice'
import { useNavigate } from 'react-router-dom'

type Props = {
  game: GameInfo
}

export const StoreItem = ({ game }: Props) => {
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

  return (
    <div className="store-item" onClick={handleMoveToCurrentGamePage}>
      <span className="store-item__title">{game.name.toLocaleUpperCase()}</span>
      <img className="store-item__cover" src={game.img} />
      <div className="store-item__wrapper">
        <span className="store-item__genre">
          {game.genre.toLocaleUpperCase()}
        </span>
        <Rating rate={game.rate} />
      </div>
      <span className="store-item__price">
        {game.price}
        <span className="price__dollar">$</span>
      </span>
      <button
        className={
          !gamesInCart.includes(game)
            ? 'store-item__btn--add'
            : 'store-item__btn--remove'
        }
        type="submit"
        onClick={handleClick}
      >
        {!gamesInCart.includes(game)
          ? 'ДОБАВИТЬ В КОРЗИНУ'
          : 'УБРАТЬ ИЗ КОРЗИНЫ'}
      </button>
    </div>
  )
}
