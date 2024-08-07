import { GameInfo } from '../../../../../api/api'
import { useStoreItem } from '../../../../../hooks/useStoreItem'
import { Rating } from '../rating'
import './store-item.scss'

type Props = {
	game: GameInfo
}

export const StoreItem = ({ game }: Props) => {
	const { gamesInCart, handleClick, handleMoveToCurrentGamePage } =
		useStoreItem(game)

	return (
		<div className='store-item' onClick={handleMoveToCurrentGamePage}>
			<img className='store-item__cover' src={game.img} />
			<span className='store-item__title'>{game.name.toLocaleUpperCase()}</span>
			<div className='store-item__wrapper'>
				<Rating rate={game.rate} />
				<span className='store-item__genre'>
					{game.genre.toLocaleUpperCase()}
				</span>
			</div>
			<span className='store-item__price'>
				{game.price}
				<span className='price__dollar'>$</span>
			</span>
			<button
				className={
					!gamesInCart.includes(game)
						? 'store-item__btn--add'
						: 'store-item__btn--remove'
				}
				type='submit'
				onClick={handleClick}
			>
				{!gamesInCart.includes(game)
					? 'ДОБАВИТЬ В КОРЗИНУ'
					: 'УБРАТЬ ИЗ КОРЗИНЫ'}
			</button>
		</div>
	)
}
