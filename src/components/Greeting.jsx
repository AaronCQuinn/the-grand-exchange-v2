import React from 'react'

const Greeting = () => {
    const greetingMsg = () => {
        const time = new Date().getHours();
        if (time < 12) {
            return 'Good morning.'
        } else if (time >= 12 && time < 17) {
            return 'Good afternoon.'
        } else {
            return 'Good evening.'
        }
    };

  return (
    <div>{greetingMsg()}</div>
  )
}

export default Greeting