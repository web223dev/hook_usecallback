import React from 'react'
import { useCountRender } from './useCountRender'

export const Square = React.memo(({increment, n}) => {
    useCountRender();
    return (
        <button onClick={()=> increment(n)}>{n}</button>
    )
})