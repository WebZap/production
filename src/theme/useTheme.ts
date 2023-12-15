import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import React, { FC, useContext } from 'react'

interface IUseTheme {
	theme: Theme
	changeTheme: () => void
}

export const useTheme = (): IUseTheme => {
	const { theme, setTheme } = useContext(ThemeContext)

	const changeTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return { theme, changeTheme }
}
