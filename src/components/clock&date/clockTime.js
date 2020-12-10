import React from 'react';

function ClockTime({ date }) {
  return <h2>
      {date.toLocaleTimeString()}
    </h2>
}

export default ClockTime;