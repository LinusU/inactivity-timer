declare namespace createInactivityTimer {
  interface InactivityTimer {
    clear: () => void
    signal: () => void
  }
}

declare function createInactivityTimer (threshold: number | string, onInactive: Function): createInactivityTimer.InactivityTimer

export = createInactivityTimer
