import React, {useState } from 'react'

function DigiteSeuNome(props) {
 
 const [nome, setNome] = useState('')
 
 
 return (
 <> 
 <h2>{nome}</h2>
 <input type="text" placeholder="Digite seu nome" value={nome}
  onChange={event => setNome(event.target.value)}/>
</>
 )
}

export default DigiteSeuNome