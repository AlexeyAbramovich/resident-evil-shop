import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllGamesFromCart } from '../../redux/cartSlice'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import './order-page.scss'

export const OrderPage = () => {
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

  return (
    <div className="order-page__container">
      <Result
        className="order-page__order"
        status="success"
        title={`Заказ №${orderId} успешно создан`}
        subTitle="Заказ будет выполнен в течении 1-го дня. Отслеживайте статус заказа в личном кабинете"
        extra={[
          <Button type="primary" onClick={handleClick} key='button'>
            Ок
          </Button>
        ]}
      />
    </div>
  )
}
