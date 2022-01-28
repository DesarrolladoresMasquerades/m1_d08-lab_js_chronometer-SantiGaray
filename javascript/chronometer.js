class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
      
    this.intervalId = setInterval(() => {
      
        this.currentTime += 1

        if(callback)
        callback()
      
      }, 1 * 1000);

  
  }

  getMinutes() {

    const mins = Math.floor(this.currentTime/60)
    return mins

  }

  getSeconds() {

    
    const seconds = this.currentTime % 60

    return seconds
    // const seconds = 0
    // if ( this.currentTime % 60 !== 0) seconds += (this.currentTime%60)

  }

  computeTwoDigitNumber(value) {
  
  const string = value.toString()

    if (string.length === 2 ) return string
    else { return "0" + string

    }
    
  }

  stop() {
    
  clearInterval(this.intervalId)

  }

  reset() {
    this.currentTime = 0
    
  }

  split() {
    
    const sec = this.computeTwoDigitNumber(this.getSeconds())
    const min = this.computeTwoDigitNumber(this.getMinutes())


    return `${min}:${sec}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
