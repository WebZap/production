import webpack from 'webpack'

export function buildLoaders(): webpack.RuleSetRule[] {
	//Выносить отдельно лоадеры в переменные
	// Если не испульем тайпскрипт - нам не нужен лоадер jsx
	const typescriptloader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}
	const styleloader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			'style-loader',
			// Translates CSS into CommonJS
			'css-loader',
			// Compiles Sass to CSS
			'sass-loader',
		],
	}

	return [typescriptloader, styleloader]
}
