import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// steps

// 1️⃣ User clicks the Increment button.
// 2️⃣ The onClick event triggers handleIncrement().
// 3️⃣ handleIncrement() dispatches the increment action.
// 4️⃣ Redux Store receives the action but doesn't understand it.
// 5️⃣ The store asks the reducer if it knows increment.
// 6️⃣ The reducer finds the increment case and updates state.value += 1.
// 7️⃣ Redux updates the store with the new state.
// 8️⃣ React re-renders the UI with the updated count.
// 9️⃣ The user sees the updated counter on the screen.