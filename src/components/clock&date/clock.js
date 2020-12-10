import React, { useState, useEffect } from 'react';
import ClockTime from './clockTime';
import ClockDate from './clockDate';

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(
    function() {
      const intervalId = setInterval(
        function() { setDate(new Date()) },
        1000
      );
      return function(){ clearInterval(intervalId); }
    },
    []
  );
  
  return <>
    <ClockDate date={date} />
    <ClockTime date={date} />
  </>;
}

export default Clock;