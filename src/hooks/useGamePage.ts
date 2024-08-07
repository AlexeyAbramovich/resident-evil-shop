import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../redux/store'

export const useGamePage = () => {
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

	return currentGame
}
