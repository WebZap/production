import { IBuildOptions } from './types/buildTypes'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import path from 'path'
import webpack from 'webpack'

export function buildConfig(options: IBuildOptions): webpack.Configuration {
	const { path, mode } = options
	return {
		mode: mode,
		entry: path.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: path.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
	}
}
