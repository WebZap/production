import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import React, { FC, ReactNode, useMemo } from 'react'

import { useState } from 'react'

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)

	const ThemeProviderProps = useMemo(() => {
		return {
			theme,
			setTheme,
		}
	}, [theme])

	return (
		<ThemeContext.Provider value={ThemeProviderProps}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
