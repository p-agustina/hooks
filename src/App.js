import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import Timer from './components/Timer';
import TimerTwo from './components/Timer2';
import TimerFour from './components/TimerFour';
import AirbnbList from './components/Airbnb';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
    <button onClick={() => setShow(!show)}>
    { show ? "Hide" : "Show"}
    </button>
    {/* {show && <Counter/>} */}

    {/* {show && <Timer />}    */}

    {/* {show && <TimerTwo />}    */}

    {/* {show && <TimerFour/>}   */}

    {show && <AirbnbList/>}
      
    </div>
  );
}

export default App;
