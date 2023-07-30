import React, { useState } from 'react';

export default function Togglepage() {
  const [backgroundColor, setbackgroundColor] = useState('rgb(0,0,0)');

  const toggleBack = () => {
    let newBackground = `rgb(${Math.random() * (255-0) + 0}, ${Math.random() * (255-0) + 0}, ${Math.random() * (255-0) + 0})`;
    console.log(newBackground);
    setbackgroundColor(newBackground);
  }
  
  return(
    <main className="mainContainer" style={{backgroundColor:backgroundColor}}>
      <button type="button" className="btn btn-primary" onClick={toggleBack}>Toggle Background</button>
    </main>
  )
}
