import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  function handleIncrementByAmount(){
    dispatch(incrementByAmount(amount));
  }

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

      <br/>
      <br/>

      <input 
      type="Number" 
      value={amount}
      placeholder='Enter amount'
      onChange={(e) => setAmount(e.target.value)}
      />

<br/>
<br/>

<button onClick={handleIncrementByAmount}>Inc by amount</button>

    </div>
  )
}

export default App
