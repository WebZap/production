export type TBuildMode = 'development' | 'production'
//Типы путей
export interface IBuildPath {
	entry: string
	build: string
	html: string
}
// Типы опций
export interface IBuildOptions {
	mode: TBuildMode
	path: IBuildPath
	port: number
	isDev: boolean
}

//Типы путей окружения
export interface IBuildEnv {
	mode: TBuildMode
	port: number
}
