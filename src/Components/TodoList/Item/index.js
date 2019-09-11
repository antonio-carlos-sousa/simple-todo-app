import React, { useContext } from 'react'

import { Context } from '../../../Store/Context/appContext'

const Item = ({ id, text, completed }) => {

  const dispatch = useContext(Context)

  return (
    <div className="items" key={id}>
      <input type="checkbox" checked={completed} onChange={() => dispatch({ type: 'complete', payload: id })}/>
      <input
        type="text"
        value={text}
        onChange={event => dispatch({ type: 'updateText', id, payload: event.target.value })}/>
      <button onClick={() => dispatch({ type: 'remove', payload: id })}>Delete</button>
    </div>
  )
}

export default Item