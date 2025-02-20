import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount, reset } from './features/counter/counterSlice';
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());

  }
  function handledecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  return (
    <div className='container'>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handledecrementClick}>-</button> 
      <button onClick={handleResetClick}>Reset</button>

    </div>
  )
}

export default App
