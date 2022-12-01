import React from 'react'
import Greeter2 from './components/Greeter2/Greeter2';
import Greeter from './components/Greeter/Greeter';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Greeter />
      <Greeter2 />
    </>
  );
}

export default App;
