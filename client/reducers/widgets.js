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
  const { type, payload, widget } = action
  switch (type) {
    case 'ADD_WIDGET':
      // console.log('Why no adding')
      return [...state, widget]
    case 'DEL_WIDGET':
      // console.log('deleting?')
      return state.filter((widget) => widget !== payload)

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
