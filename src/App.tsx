import React from 'react';
import './App.css';
import { Button, Search } from './components';

function App() {

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(e.target[0].value)
    }

  return (
    <>
      <Button
      Btntype="secondary"
      onClick={() => alert('clicked')}
      // disabled
      >
        Nominate
</Button>
<Search
onSubmit={handleSubmit}
/>
</>
  );
}

export default App;
