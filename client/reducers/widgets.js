const initialWidgetState = [
  {
    id: 1,
    name: 'Red widget',
    price: 23.45,
    mfg: 'Acme Inc.',
    inStock: 4,
  },
]

const widgetReducer = (state = initialWidgetState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_WIDGET':
      // console.log('Why no adding')
      //thoughts on new twice album gerard
      return [...state, payload]
    case 'DEL_WIDGET':
      // console.log('deleting?')
      return state.filter((widget) => widget !== payload)

    case 'GET_ALL_WIDGETS':
      return payload

    case 'UPDATE_WIDGET':
      return state.map((widget) => {
        if (widget === payload.oldBat) {
          widget = payload.newBat
        }
        console.log(`I've been upgraded!`)
        return widget
      })
    default:
      return state
  }
}

export default widgetReducer
