import { useSelector } from 'react-redux'
import './cart-block.scss'
import { RootState } from '../../redux/store'
import { CartBlockItem } from '../cart-block-item'
import { calcTotalPrice } from '../../utils'
import { useNavigate } from 'react-router-dom'

export const CartBlock = () => {
  const gamesInCart = useSelector((state: RootState) => state.cart)
  const navigate = useNavigate()
  const handleScroll = (e: any) => {
    e.stopPropagation()
  }
  const handleCreatingOrder = () => {
    navigate('/order')
  }
  return (
    <div className="cart-block">
      <h3 className="cart-block__title">КОРЗИНА</h3>
      {gamesInCart.length > 0 ? (
        <ul className="cart-block__list" onScroll={handleScroll}>
          {gamesInCart.map((gameInfo) => (
            <CartBlockItem key={gameInfo.name} game={gameInfo} />
          ))}
        </ul>
      ) : (
        <span className="cart-block__empty-cart">Корзина пуста</span>
      )}
      <div className="cart-block__wrapper">
        <span className="cart-block__total">Итого:</span>
        <span className="cart-block__total-price">
          {calcTotalPrice(gamesInCart)}$
        </span>
      </div>
      {gamesInCart.length > 0 && (
        <button type="submit" className="cart-block__order-btn" onClick={handleCreatingOrder}>
          ОФОРМИТЬ ЗАКАЗ
        </button>
      )}
    </div>
  )
}
