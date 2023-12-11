import { IBuildEnv, IBuildPath } from './config/build/types/buildTypes'

import { buildConfig } from './config/build/buildConfig'
import path from 'path'
import webpack from 'webpack'

//Создание путей для передачи их в функцию которая содержит конфинг вебпака

export default (env: IBuildEnv) => {
	const paths: IBuildPath = {
		//Создание путя для вхождения ts файла
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		//место где собирается весь проекта
		build: path.resolve(__dirname, 'build'),
		//путь до html файла, формирование шаблона
		html: path.resolve(__dirname, 'public', 'index.html'),
	}

	const mode = env.mode || 'development'
	const PORT: number = env.port || 3000
	const isDev = mode === 'development'

	// создание конфига вебпака с помощью функции которая декомпозирования
	// на вход она получает объект с путями

	const config: webpack.Configuration = buildConfig({
		mode: mode,
		path: paths,
		port: PORT,
		isDev,
	})

	return config
}
