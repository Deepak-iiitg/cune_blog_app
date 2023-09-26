import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { createContext } from 'react';
import Dash from './components/Dash';
const blogContext = createContext();
function App() {
  const [render,setRender] = useState('article');
  return (
    <div>
      <blogContext.Provider value={{render,setRender}}>
        <Navbar/>
        <Dash />
      </blogContext.Provider>
       
    </div>
  );
}
export {blogContext};
export default App;
