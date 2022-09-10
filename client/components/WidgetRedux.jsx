import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteWidget, sendWidget } from '../actions/index'
import { getWidgets } from '../apiClient'

function Widgets(props) {
  const initialData = {
    id: 0,
    name: '',
    price: 1,
    mfg: '',
    inStock: 0,
  }
  const [form, setForm] = useState(initialData)
  const widgets = useSelector((state) => state.widgets)
  const widget = props.name
  const dispatch = useDispatch()

  function handleChange(e) {
    // 'e' for 'event'
    // If we don't listen for change, we can't update the state, meaning the form is 'locked down'
    const { name, value } = e.target
    setForm({ ...form, [name]: value }) // spread (...) allows us to keep all the data that was there, but update/over-write the part that has changed.
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('I am a widget', widget)
    console.log('show me the FORM', form)
    dispatch(sendWidget(form)) //hi gerard
    setForm(initialData)
    console.log('show me the shape of you', widgets)
  }

  function handleClick() {
    dispatch(deleteWidget(widget))
  }

  // function handleModifyClick() {
  //   dispatch(updateWombat(wombat))
  // }

  return (
    <div>
      {widget}
      <button onClick={handleClick}>Delete</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Create a Widget:
          <input
            id="name"
            onChange={handleChange}
            value={form.name} //form is an obj
            name="name"
          />
          <input
            id="price"
            onChange={handleChange}
            value={form.price}
            name="price"
          />
          <input id="mfg" onChange={handleChange} value={form.mfg} name="mfg" />
          <input
            id="inStock"
            onChange={handleChange}
            value={form.inStock}
            name="inStock"
          />
        </label>
        <button type="submit">Add my Widget</button>
      </form>
    </div>
  )
}

export default Widgets
