# Inactivity Timer

Run a function after a period of inactivity.

## Installation

```sh
npm install --save inactivity-timer
```

## Usage

```js
const createInactivityTimer = require('inactivity-timer')

// Lock the screen after 5 min of idle
const lockTimer = createInactivityTimer('5m', () => {
  // Lock the screen!
})

// Signal activity when the mouse moves
document.addEventListener('mousemove', () => {
  lockTimer.signal()
})
```

## API

### `createInactivityTimer(threshold, onInactivity) => InactivityTimer`

Create a new `InactivityTimer`.

`threshold` can be specied as either a number, in milliseconds, or any string that [the `ms` module](https://github.com/zeit/ms) can parse.

### `InactivityTimer#clear()`

Clear any timer currently scheduled.

### `InactivityTimer#signal()`

Signal activity, which will extend the time until `onInactivity` is called with the earlier specified `threshold`.
