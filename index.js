const express = require('express')
const path = require('path')
const opn = require('opn')

const server = express()
const host = 'http://localhost:8082'
server.use('/assets', express.static(path.resolve(__dirname, './assets')))
server.use('/dist', express.static(path.resolve(__dirname, './dist')))
server.use('/styles', express.static(path.resolve(__dirname, './styles')))
server.use('/imgs', express.static(path.resolve(__dirname, './imgs')))
server.use('/fonts', express.static(path.resolve(__dirname, './fonts')))

server.get('/game', (req, res) => {
  res.sendFile(path.resolve(__dirname, './game.html'));
})

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
})

server.listen(8082, () => {
  console.log(`server started at ${host}`)
  opn(host)
})
