import './App.scss'

import { Route, Routes } from 'react-router-dom'

import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { Counter } from './components/Counter'
import { Link } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import React from 'react'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'

const App = () => {
	const { theme, changeTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={changeTheme}>TOGGLE THEME</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>loading</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync />} />
					<Route path={'/'} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
