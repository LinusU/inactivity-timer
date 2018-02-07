'use strict'

var ms = require('ms')

// Tracking a moving triggerAt is faster than rescheduling timers
// https://jsperf.com/timeouts-vs-date-tracking/1

module.exports = function createInactivityTimer (threshold, onInactive) {
  var id = null
  var triggerAt = 0

  if (typeof threshold === 'string') threshold = ms(threshold)

  if (typeof threshold !== 'number') throw new TypeError('Expected `threshold` to be a number')
  if (typeof onInactive !== 'function') throw new TypeError('Expected `onInactive` to be a function')

  function trigger () {
    var diff = triggerAt - Date.now()

    if (diff <= 0) {
      id = null
      onInactive()
    } else {
      id = setTimeout(trigger, diff)
    }
  }

  function clear () {
    if (id === null) return

    clearTimeout(id)
    id = null
  }

  function signal () {
    triggerAt = Date.now() + threshold
    if (id === null) id = setTimeout(trigger, threshold)
  }

  return { clear, signal }
}
