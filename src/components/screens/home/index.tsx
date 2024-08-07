import { useMemo } from 'react'
import { GameInfo } from '../../../api/api'
import { useHomePage } from '../../../hooks/useHomePage'
import { Loading } from '../../ui/loading'
import { StoreItem } from './components/store-item'
import './home-page.scss'

export const Home = () => {
	const { gamesData, filter } = useHomePage()

	return useMemo(
		() =>
			gamesData.loading ? (
				<Loading />
			) : (
				<div className='games-list'>
					{!filter
						? gamesData.games.map((game: GameInfo) => (
								<StoreItem game={game} key={game.name} />
						  ))
						: gamesData.games
								.filter((gameInfo: GameInfo) => {
									return gameInfo.name
										.toLowerCase()
										.includes(filter.toLowerCase(), 0)
								})
								.map((game: GameInfo) => (
									<StoreItem game={game} key={game.name} />
								))}
				</div>
			),
		[gamesData, filter]
	)
}
