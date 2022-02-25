import React from 'react'
import If from './if'

function UsuarioLogado(props) {
 
    const usuario = props.usuario || {}
 
 
 return (
 <> 
        <If test={usuario && usuario.nome && usuario.email}>
            <h2>Usuario Logado:</h2>
            <h3>
                {usuario.nome} - {usuario.email}
            </h3>

        </If>

        <If test={!usuario || !usuario.nome || usuario.email}>
            <h2>Bem vindo, <a href="#"> Faça seu login </a></h2>
           
        </If>
     
 
</>
 )
}

export default UsuarioLogado