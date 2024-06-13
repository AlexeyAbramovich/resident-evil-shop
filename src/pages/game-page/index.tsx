import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './game-page.scss'

export const GamePage = () => {
  const currentGame = useSelector((state: RootState) => state.currentGame)
  const navigate = useNavigate()

  /*
    Не мог понять, почему undefined было, вспомнил особенность useEffect,
    он отрабатывает после рендера компонента, получается на момент рендера при перезагрузке
    страницы currentGame - пустой объект без полей, все поля - undefind,
    поэтому до useEffect - не доходило, чтобы выкинуть на главную страницу
  */
  useEffect(() => {
    if (!currentGame.name) {
      navigate('/')
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  })

  if (!currentGame.name) {
    return null
  }

  return (
    <div className="game-page__container">
      <div className="game-page__info-block">
        <img className="info-block__cover" src={currentGame.img} />
        <div className="info-block__info">
          <span className="info__name">{currentGame.name}</span>
          <span className="info__release">Релиз: {currentGame.release}</span>
          <span className="info__creator">
            Создатель: {currentGame.creator}
          </span>
          <span className="info__genre">
            Жанр:{' '}
            <span className="genre__text">
              {currentGame.genre.toUpperCase()}
            </span>
          </span>
          <span className="info__rating">Рейтинг: {currentGame.rate}⭐</span>
          <ul className="platforms">
            Поддерживаемые платформы:
            {currentGame.platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="game-page__description">
        <div className="description__title">Описание</div>
        <div className="description__text">{currentGame.description}</div>
      </div>
      <div className="game-page__system-requirements">
        <div className="system-requirements__title">Системные требования</div>
        <div className="system-requirements__text">
          {currentGame['system-requirements']}
        </div>
      </div>
      <div className="game-page__trailer-wrapper">
        <iframe
          className="game-page__trailer"
          allowFullScreen
          src={currentGame.trailer}
          title="YouTube"
        />
      </div>
    </div>
  )
}
