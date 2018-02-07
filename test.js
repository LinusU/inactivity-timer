const createInactivityTimer = require('./')
const assert = require('assert')

let isInactive = false
const timer = createInactivityTimer('100ms', () => { isInactive = true })

setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 20)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 40)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 60)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 80)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 100)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 120)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 140)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 160)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 180)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 200)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 220)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 240)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 260)

setTimeout(() => { assert.strictEqual(isInactive, true); isInactive = false }, 380)

setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 400)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 420)
setTimeout(() => { assert.strictEqual(isInactive, false); timer.signal() }, 440)

setTimeout(() => { assert.strictEqual(isInactive, true); isInactive = false }, 560)
