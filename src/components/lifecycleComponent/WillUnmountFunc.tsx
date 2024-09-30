import { useEffect, useState } from 'react';

export const WillUnmountFunc: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    
    return () => {
      clearInterval(timerId)
      console.log('FuncComponentWillUnmount')
    }
  },[]);
  return (
    <div>{count}</div>
  )

};
