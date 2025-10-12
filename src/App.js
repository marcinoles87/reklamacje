import { useState } from 'react';
import './App.css';
import DaneFirmy from './components/DaneFirmy';

function App() {

  const [daneFirmy , setDaneFirmy] = useState('')
  const [daneZglaszajacego , setDaneZglaszajacego] = useState('')
  const [data , setData ] = useState('')
  const [towar , setTowar] = useState('')
  const [zgloszenie , setZgloszenie] = useState('')
  const [żadanie , setŻadanie] = useState('')



  return (
    <div className="App">
      <h1>Wniosek do zgloszenia reklamacyjnego</h1>
      <DaneFirmy></DaneFirmy>
      
    </div>
  );
}

export default App;
