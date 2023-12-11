import { IBuildOptions } from './types/buildTypes'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import webpack from 'webpack'

//Создание функции которая возращает настройку конфига вебпака

export function buildConfig(options: IBuildOptions): webpack.Configuration {
	//на вход она получает объект с путями, и настройку мода
	const { path, mode } = options
	return {
		// Мод разарботки или продакшина
		mode: mode,
		// входной путь ts
		entry: path.entry,
		// Выходной блок готового бандла
		output: {
			filename: '[name].[contenthash].js',
			path: path.build,
			clean: true,
		},
		// Блок плагинов подключаемых
		plugins: buildPlugins(options),
		// Блок подключаемы Лоадеров
		module: {
			rules: buildLoaders(options),
		},
		//Блок пожключаемыех резолверо
		resolve: buildResolvers(),
		// Блок подключаемых девтулов
		devtool: options.isDev ? 'inline-source-map' : undefined,
		devServer: options.isDev ? buildDevServer(options) : undefined,
	}
}
