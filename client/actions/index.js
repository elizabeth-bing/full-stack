// Example action creator:

// let nextWordId = 0

export function addWidget(name) {
  console.log('name me please')
  return {
    type: 'ADD_WIDGET',
    payload: name,
  }
}

export function deleteWidget(name) {
  console.log('del function')
  return {
    type: 'DEL_WIDGET',
    payload: name,
  }
}

export function updateWidget(oldBat, newBat) {
  console.log('update function', oldBat, newBat)
  return {
    type: 'UPDATE_WIDGET',
    payload: { oldBat, newBat },
  }
}
