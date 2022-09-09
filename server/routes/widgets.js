const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getWidgets()
    .then((widgets) => {
      res.json(widgets)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const post = {
    ...req.body,
  }

  db.addWidgets(post)
    .then(() => {
      // const newWidgetId = ids[0]
      return db.getWidgets()
    })
    .then((newWidget) => {
      res.json(newWidget)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
