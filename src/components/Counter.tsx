import './Counter.scss'

import React, { useState } from 'react'

import useCount from '../hooks/useCount'

export const Counter = () => {
	const { count, decrement, increment } = useCount(0)

	return (
		<div>
			<div className='count'>{count}</div>
			<div onClick={increment}>+ прибавить</div>
			<div onClick={decrement}>- отнять</div>
		</div>
	)
}
