import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCartState } from '../../../redux/cartStateSlice'
import { RootState } from '../../../redux/store'
import { CartBlock } from './components/cart-block'
import { Search } from './components/search'
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
		<div className='header'>
			<span className='logo' onClick={() => navigate('/')}>
				<h2>RESIDENT</h2> <h2>EVIL</h2> <h2>STORE</h2>
			</span>
			<div className='header__wrapper'>
				<Search />
				<Badge count={gamesInCart.length} size='small'>
					<ShoppingCartOutlined className='cart' onClick={handleClick} />
				</Badge>
			</div>
			{cartState && <CartBlock />}
		</div>
	)
}
