import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  return (
    <>
    <div className='container-info'>
      <div className='container-form'>
      <form className='form' >
      <label htmlFor="">Nome completo</label>
      <input type="text" />
      <label htmlFor="">Email</label>
      <input type="email" />
      <label htmlFor="">Telefone</label>
      <input type="text" />
      <label htmlFor="">CPF</label>
      <input type="text" placeholder='Somente números' />
      <button>Cadastrar</button>
      </form>
      </div>
    </div>
    </>
  )
}


