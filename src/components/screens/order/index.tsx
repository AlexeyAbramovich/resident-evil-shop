import { Button, Result } from 'antd'
import { useOrderPage } from '../../../hooks/useOrderPage'
import './order-page.scss'

export const Order = () => {
	const { orderId, handleClick } = useOrderPage()

	return (
		<div className='order-page__container'>
			<Result
				className='order-page__order'
				status='success'
				title={`Заказ №${orderId} успешно создан`}
				subTitle='Заказ будет выполнен в течении 1-го дня. Отслеживайте статус заказа в личном кабинете'
				extra={[
					<Button type='primary' onClick={handleClick} key='button'>
						Ок
					</Button>,
				]}
			/>
		</div>
	)
}
