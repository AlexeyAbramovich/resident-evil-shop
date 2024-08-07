import { Rate } from 'antd'
import './raiting.scss'

export const Rating = ({ rate }: { rate: number }) => {
	return (
		<div className='rating'>
			<span className='rate-text'>{rate}/5</span>
			<Rate className='rate-stars' disabled allowHalf defaultValue={rate} />
		</div>
	)
}
