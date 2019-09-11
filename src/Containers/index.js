import React, { useReducer, useEffect } from 'react'

import TodoList from '../Components/TodoList'
import appReducer from '../Store/Reducers/appReducer'
import { Context } from '../Store/Context/appContext'
import { useEffectOnce } from '../Hooks/customHooks'

export default function App () {

  const [state, dispatch] = useReducer(appReducer, [])

  /** we can do like this */
  // useEffect(() => {
  //   const data = localStorage.getItem('data')
  //
  //   dispatch({ type: 'initialize', payload: JSON.parse(data) })
  //
  // }, [])

  /** or like this [with custom hook -> Ref hook + useEffect hook] */
  useEffectOnce(() => {
    const data = localStorage.getItem('data')

    dispatch({ type: 'initialize', payload: JSON.parse(data) })
  })

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(state))
  }, [state])

  return (
    <Context.Provider value={dispatch}>
      <div className="todo-app">

        <div className="header">
          <h1>Todo App</h1>
        </div>

        <div>
          <button
            onClick={() => dispatch({ type: 'add' })}
            style={{ marginBottom: '20px' }}>
            New Todo
          </button>
          <TodoList itemsList={state}/>
        </div>
      </div>
    </Context.Provider>
  )
}