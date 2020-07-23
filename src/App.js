import React, { useState, useCallback } from 'react'
import { Hello } from './hello';
import { Square } from './Square';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(n => {
    setCount(c => c + n)
  }, [setCount])
  const favoriteNums = [7, 21, 37];
  
  return (
    <div>
      <Hello increment={increment} />
      <div>{count}</div>
      {favoriteNums && favoriteNums.map((n) => (
        // <Square onClick={() => {increment(n)}} n={n} key={n} />
        <Square increment={increment} n={n} key={n} />
      ))}
    </div>
  )
}

export default App