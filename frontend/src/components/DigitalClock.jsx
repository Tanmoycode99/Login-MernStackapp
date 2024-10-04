import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect hook to update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Function to format the time as HH:MM:SS AM/PM
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
  };

  // Function to format the day and date
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className='clock-div'>
      <div className='clock1'>{formatDate(currentTime)}</div>
      <div className='clock2'>{formatTime(currentTime)}</div>
    </div>
  );
}



export default DigitalClock;
