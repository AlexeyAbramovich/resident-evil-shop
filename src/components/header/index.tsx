import { Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Search } from '../search'
import { CartBlock } from '../cart-block'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import { setCartState } from '../../redux/cartStateSlice'
import './header.scss'

export const Header = () => {
  const gamesInCart = useSelector((state: RootState) => state.cart)
  const cartState = useSelector((state: RootState) => state.cartState)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  document.onclick = () => {
    dispatch(setCartState(false))
  }

  const handleClick = (ev: any) => {
    ev.stopPropagation()
    dispatch(setCartState(!cartState))
  }

  return (
    <div className="header">
      <span className="logo" onClick={() => navigate('/')}>
        <span className="logo__first-latter">R</span>ESIDENT{' '}
        <span className="logo__first-latter">E</span>VIL{' '}
        <span className="logo__first-latter">S</span>TORE
      </span>
      <div className="header__wrapper">
        <Search />
        <Badge count={gamesInCart.length} size="small">
          <ShoppingCartOutlined className="cart" onClick={handleClick} />
        </Badge>
      </div>
      {cartState && <CartBlock />}
    </div>
  )
}
