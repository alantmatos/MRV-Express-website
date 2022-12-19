import React from 'react'
import './index.css';

const Contact = () => {
  return (
    <div className='contact-container'>

      <div className='contact-address'>
        Endereço:<br></br>
        R. Serpentina 72, Carlos Prates Belo Horizonte - MG CEP: 30710-050<br></br> <br></br>
        Horário de funcionamento: <br></br>
        Segunda à Sexta de 8:00h às 18:00h<br></br> <br></br>
        Telefone: <br></br>
        31 2526-4765 / 31 9694-8545<br></br> <br></br>
        E-mail: <br></br>
        contato@mvrexpress.com.br<br></br>
      </div>
      
      <hr></hr>

      <form className='contact-form'>
       <label> Contato:<br></br> <br></br>
        <input type='text' name='name' placeholder='Nome'></input> <br></br>
        <input type='email' name='email' placeholder='Email'></input> <br></br>
        <input type='tel' name='phone' placeholder='Telefone'></input> <br></br>
        <textarea name='message' placeholder='Mensagem'></textarea> <br></br> <br></br>
        <input type="submit" value="Enviar" />
       </label>
      </form>


    </div>
  )
}

export default Contact