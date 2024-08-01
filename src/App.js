import './App.css';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState(['apple','banana','grapes','mango']);
  return (
    <>
    {item.map((item) => 
    <ul>
    <li>{item}</li>
    </ul>
    )}
    </>
  );
}

export default App;
