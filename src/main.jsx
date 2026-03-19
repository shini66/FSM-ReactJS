import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '@/App.jsx'
import Nav from '@/components/UI/Nav.jsx'
import Footer from '@/components/UI/Footer.jsx'

function test(){
  let datos1 = {nombre: 'Juan', edad: 30}
  let datos2 = {edad: 33}
  let datos3 = {empresa: 'NaN', puesto: 'Desarrollador'}

  let resumen = Object.assign({}, datos1, datos2, datos3)

  console.log(resumen)

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {test()}
    <Nav />
    <App />
    <Footer />
  </StrictMode>,
)
