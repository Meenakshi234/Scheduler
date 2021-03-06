import { useState } from 'react';


export default function useVisualMode(initial){
 const [mode ,setMode] = useState(initial);
 const [history, setHistory] = useState([initial]); // This line is new!

  const transition =function(newMode,replace = false){
      setMode(newMode);
      if (replace) {
        setHistory(prev => [...prev.slice(0, -1), newMode])
      } else {
        setHistory(prev => [...prev, newMode])
      }

  }
  const back = function(){
    if (history.length > 1){
        setMode(history[history.length - 2])
        setHistory(prev => [...prev.slice(0, -1)])
      }
  }
   return { mode,transition,back };
};
