const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log('Durante')
})

console.log('Início')

eventEmitter.emit('start')

console.log('Determino')