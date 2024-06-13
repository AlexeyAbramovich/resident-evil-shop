import { useSelector } from 'react-redux'
import { StoreItem } from '../../components/store-item'
import { RootState } from '../../redux/store'
import { Loading } from '../../components/loading'
import { GameInfo } from '../../api/api'
import './home-page.scss'

export const HomePage = () => {
  const gamesData = useSelector((state: RootState) => state.games)
  const filter = useSelector((state: RootState) => state.filter.filter)

  if (gamesData.loading) {
    return <Loading />
  }

  return (
    <div className="games-list">
      {!filter
        ? gamesData.games.map((game: GameInfo) => (
            <StoreItem game={game} key={game.name} />
          ))
        : gamesData.games
            .filter((gameInfo: GameInfo) => {
              return gameInfo.name.toLowerCase().includes(filter.toLowerCase(), 0)
            })
            .map((game: GameInfo) => <StoreItem game={game} key={game.name} />)}
    </div>
  )
}
