import { IBuildOptions, IBuildPath } from './types/buildTypes'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

export function buildPlugins({
	path,
}: IBuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: path.html,
		}),
		new webpack.ProgressPlugin(),
	]
}
