import React, {useContext} from 'react'
import Navbar from './Components/Navbar';
import Books from './Components/Books';

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Books />
    </div>
  )
}

export default App;
