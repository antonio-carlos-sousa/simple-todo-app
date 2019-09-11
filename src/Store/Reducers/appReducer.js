const appReducer = (state, action) => {
  switch (action.type) {

    case 'add':
      return [
        ...state,
        { id: Date.now(), text: '', completed: false }
      ]

    case 'remove':
      return [
        ...state.filter(item => item.id !== action.payload)
      ]

    case 'complete':
      return [
        ...state.filter(item => {

          if (item.id === action.payload) {
            item.completed = true
          }

          return item
        })
      ]

    case 'updateText':
      return [
        ...state.filter(item => {

          if (item.id === action.id) {
            item.text = action.payload
          }

          return item
        })
      ]

    case 'initialize':
      return action.payload

    default:
      return state
  }
}

export default appReducer