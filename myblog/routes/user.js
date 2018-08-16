const express = require('express')
const router = express.Router()

// 在app.use('/users) 之后 、
router.get('/:name', (req, res) => {
  // res.send(`Hello, ${req.params.name}`)
  res.render('users', {
    name: req.params.name,
    supplies: ['mop', 'broom', 'duster']
  })
})

module.exports = router
