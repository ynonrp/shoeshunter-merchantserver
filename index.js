const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const apiRoutes = require('./routes/apiRoutes')
const indexRoutes = require('./routes/indexRoutes')
const app = express()
const PORT = process.env.PORT || 4000

app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/' , indexRoutes)
app.use('/api', apiRoutes);
// app.get('/', (req, res) => res.send('<h2> Hello World! </h2>'));
app.listen(PORT, () => console.log(`app listening on port ${PORT}`))