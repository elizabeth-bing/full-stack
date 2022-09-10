import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../actions'

import { getWidgets } from '../apiClient'
import Widget from './Widget'
import WidgetRedux from './WidgetRedux'

function App() {
  // const [widget, setWidgets] = useState([])
  console.log('render')
  //state.widgets = line 6 in reducer file
  const widget = useSelector((state) => state.widgets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll())
  }, [])

  return (
    <div>
      <WidgetRedux />
      <h1>Widgets for the win!</h1>
      {widget.map((widgetData) => {
        return <Widget widgetData={widgetData} key={widgetData.id} />
      })}
    </div>
  )
}

export default App
