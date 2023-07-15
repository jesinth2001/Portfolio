import logo from './logo.svg';
import './App.css';
import  Header  from './Header';
import Main from './Main';
import ValueProvider from './ValueProvider';
import { useState } from 'react';



function App() {

  const [localstate,setLocalState]=useState(0)
  const [navigate,setNav]=useState("Portfolio")
  return (
    <div>
   
   <Header></Header>
    <ValueProvider.Provider value={[localstate,setLocalState,navigate,setNav]}>
    <Main></Main>
   </ValueProvider.Provider>
   
   </div>
  );
}

export default App;
