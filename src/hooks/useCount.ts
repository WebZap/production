import { useState } from 'react'

export interface IUseCount {
	count: number
	increment: () => void
	decrement: () => void
}

const useCount = (initialState: number): IUseCount => {
	const [count, setCount] = useState<number>(initialState)
	const increment = () => {
		setCount(prev => prev + 1)
	}
	const decrement = () => {
		setCount(prev => prev - 1)
	}

	return { count, increment, decrement }
}

export default useCount
