const schedule = require('node-schedule')


const task1 = schedule.scheduleJob('*/1 * 20 * * *', function () {
  console.log('Executing task 1!', new Date().getSeconds())
})

setTimeout(function () {
  task1.cancel()
  console.log('Cancelling task1')
}, 10000)

// setImmediate
// setInterval

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1,5)] // monday to friday
rule.hour = 20
rule.second = 50

const task2 = schedule.scheduleJob(rule, function() {
  console.log('Executing task 2', new Date().getSeconds())
})