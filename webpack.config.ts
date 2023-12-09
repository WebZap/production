import HTMLWebpackPlugin from 'html-webpack-plugin'
import { IBuildPath } from './config/build/types/buildTypes'
import { buildConfig } from './config/build/buildConfig'
import { buildLoaders } from './config/build/buildLoaders'
import { buildPlugins } from './config/build/buildPlugins'
import { buildResolvers } from './config/build/buildResolvers'
import path from 'path'
import webpack from 'webpack'

const paths: IBuildPath = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	build: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html'),
}

const config: webpack.Configuration = buildConfig({
	mode: 'development',
	path: paths,
})

export default config
