import React, { useEffect, useState } from 'react'
import { getWidgets } from '../apiClient'
import Widget from './Widget'
import WidgetRedux from './WidgetRedux'

function App() {
  const [widget, setWidgets] = useState([])
  console.log('render')

  useEffect(() => {
    console.log('using the effect')
    getWidgets()
      .then((res) => {
        setWidgets(res.body)
      })
      .catch((err) => {
        console.error(err.message)
      })
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
