const mineflayer = require('mineflayer')

const config = {
  host: 'SnehaMC.aternos.me',
  port: 49684,
  username: 'Assistant',
  password: 'yourpassword'
}

function createBot() {

const bot = mineflayer.createBot({
  host: config.host,
  port: config.port,
  username: config.username
})

bot.on('spawn', () => {

console.log("Assistant joined server")

setTimeout(()=>{
bot.chat(`/login ${config.password}`)
},3000)

setInterval(()=>{
const actions = ['forward','back','left','right','jump']
const action = actions[Math.floor(Math.random()*actions.length)]

bot.setControlState(action,true)

setTimeout(()=>{
bot.setControlState(action,false)
},2000)

},30000)

})

bot.on('end',()=>{
console.log("Disconnected... reconnecting")
setTimeout(createBot,5000)
})

bot.on('error',err=>console.log(err))

}

createBot()
