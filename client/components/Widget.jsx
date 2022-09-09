import React from 'react'
// key in line 3 and 5 refer to the key from app.jsx at line 24. It imports the key defined there.
function Widget({ widgetData }, { key }) {
  return (
    <li key={key}>
      {widgetData.name}
      {widgetData.price}
      {widgetData.mfg}
      {widgetData.inStock}
    </li>
  )
}

export default Widget
