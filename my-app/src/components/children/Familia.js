import React from 'react'
//import Membro from './Membro'

function Familia(props) {
 
 
 
 return (
 <> 
    <h2>[início] da Família</h2>
            {props.children}
    <h2>[Fim] Membros da Familia</h2>
</>
 )
}

export default Familia