import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/layout/header'
import { Game } from './components/screens/game'
import { Home } from './components/screens/home'
import { Order } from './components/screens/order'
import { useFetchGames } from './hooks/useFetchGames'
import './styles/app.scss'

function App() {
	useFetchGames()

	return (
		<>
			<div className='container'>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/game/:name' element={<Game />} />
						<Route path='/order' element={<Order />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	)
}

export default App
