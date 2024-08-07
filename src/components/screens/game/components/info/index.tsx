import { GameInfo } from '../../../../../api/api'

const Info = ({ currentGame }: { currentGame: GameInfo }) => {
	return (
		<div className='game-page__info-block__info'>
			<span className='game-page__info-block__info__name'>
				{currentGame.name}
			</span>
			<span className='game-page__info-block__info__release'>
				Релиз: {currentGame.release}
			</span>
			<span className='game-page__info-block__info__creator'>
				Создатель: {currentGame.creator}
			</span>
			<span className='game-page__info-block__info__genre'>
				Жанр:{' '}
				<span className='game-page__info-block__info__genre__text'>
					{currentGame.genre.toUpperCase()}
				</span>
			</span>
			<span className='game-page__info-block__info__rating'>
				Рейтинг: {currentGame.rate}⭐
			</span>
			<span>Поддерживаемые платформы:</span>
			<ul className='platforms'>
				{currentGame.platforms.map(platform => (
					<li key={platform}>{platform}</li>
				))}
			</ul>
		</div>
	)
}

export default Info
