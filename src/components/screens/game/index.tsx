import { useGamePage } from '../../../hooks/useGamePage'
import Description from './components/description'
import Info from './components/info'
import SystemRequirements from './components/system-requirements'
import Trailer from './components/trailer'
import './game-page.scss'

export const Game = () => {
	const currentGame = useGamePage()

	if (!currentGame.name) {
		return null
	}

	return (
		<div className='game-page'>
			<div className='game-page__info-block'>
				<img className='game-page__info-block__cover' src={currentGame.img} />
				<Info currentGame={currentGame} />
			</div>
			<Description description={currentGame.description} />
			<SystemRequirements
				systemRequirements={currentGame['system-requirements']}
			/>
			<Trailer trailer={currentGame.trailer} />
		</div>
	)
}
