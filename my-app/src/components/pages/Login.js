import { useState } from 'react'
import styles from "./Cadastro.css"

function Login(){
  return(
    <div className='container'>

      <h1>Login</h1>

      <form>
      <div className='input'>
        <input
        type='text'
        placeholder='Digite seu nome'
        />
      </div>

      <div className='input'>
        <input
        type='password'
        placeholder='Digite sua senha'
        />
      </div>

      <div className='input'>
       <button>Login</button>
      </div>


      </form>
    </div>

  );
}

export default Login