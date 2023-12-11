import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

/*
Operador assertión de no nulo o non-null assertion (!)
* Ej: document.getElementById('root')!)
Le dice al compilar que el valor a la izquierda no será nulo o indefinido durante la ejecución

Estás indicando al compilador que estás seguro de que getElementById('root') no devolverá un valor nulo y 
puedes proceder a acceder a las propiedades o métodos de ese elemento sin preocuparte por los errores de tipo
*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
