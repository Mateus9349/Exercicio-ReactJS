import { useState } from 'react'
import styles from "./Cadastro.css"

function Cadastro(){

  function cadastrarUsuario(e){
    e.preventDefault()
    console.log(`Usuario ${name} cadastrado com a senha ${password}, CPF ${cpf}, telefone: ${telefone},
 endereço: ${endereço} e e-mail: ${email}`)
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [cpf, setCpf] = useState()
  const [telefone, setTelefone] = useState()
  const [endereço, setEndereço] = useState()
  const [email, setEmail] = useState()




  return(
    <div className='container'>

      <h1>Meu cadastro</h1>

      <form onSubmit={cadastrarUsuario}>
      <div className='input'>
        <input
        type='text'
        placeholder='Digite seu nome'
        onChange={(e)=>setName(e.target.value)}
        />
      </div>

      <div className='input'>
        <input
        type='password'
        placeholder='Digite sua senha'
        onChange={(e)=>setPassword(e.target.value)}
        />
      </div>

      <div className='input'>
        <input
        type='number'
        placeholder='Digite seu cpf'
        onChange={(e)=>setCpf(e.target.value)}
        />
      </div>

      <div className='input'>
        <input
        type='number'
        placeholder='Digite seu telefone'
        onChange={(e)=>setTelefone(e.target.value)}
        />
      </div>

      <div className='input'>
        <input
        type='text'
        placeholder='Digite seu endereço'
        onChange={(e)=>setEndereço(e.target.value)}
        />
      </div>

      <div className='input'>
        <input
        type='e-mail'
        placeholder='Digite seu e-mail'
        onChange={(e)=>setEmail(e.target.value)}
        />
      </div>

      <div className='input'>
        <button type='submit' value='cadastrar'>
            Cadastrar
        </button>
      </div>


      </form>
    </div>

  );
}

export default Cadastro