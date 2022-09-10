import { saveWidget } from '../apis/apiClient'

export function addWidget(name) {
  console.log('name me please', name)
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

export function sendWidget(formData) {
  return (dispatch) => {
    return saveWidget(formData).then((para) => {
      // console.log(para)
      dispatch(addWidget(para))
    })
  }
}
