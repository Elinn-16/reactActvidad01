import { useState } from 'react'
import './App.css'

function App() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [contactoGuardado, setContactoGuardado] = useState(null); 

  const guardarNombre = (event) => {
    setInputName(event.target.value);
    console.log("Nombre:", event.target.value);
  };

  const guardarEmail = (event) => {
    setInputEmail(event.target.value);
    console.log("Email:", event.target.value);
  };

  const manejarGuardarContacto = () => { 
    setContactoGuardado(`Nombre: ${inputName}, Email: ${inputEmail}`);
  };


  return (
    <div>
      <h1>Agenda de contactos</h1>
      <input type="text" placeholder="Nombre" onChange={guardarNombre} />
      <input type="email" placeholder="Email" onChange={guardarEmail} />
      <button onClick={manejarGuardarContacto}>Guardar Contacto</button>
      <p>{contactoGuardado}</p>
    </div>
  );
}


export default App
