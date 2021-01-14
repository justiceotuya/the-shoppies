import React from 'react';
import './App.css';
import { Button, Search } from './components';

function App() {
  return (
    <>
      <Button
      Btntype="secondary"
      onClick={() => alert('clicked')}
      // disabled
      >
        Nominate
</Button>
{/* <Search/> */}
</>
  );
}

export default App;
