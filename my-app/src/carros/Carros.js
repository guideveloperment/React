import React, { useState } from 'react'
import './Carros.css'

function Carros(props) {


    return (
        <>
            <li className="item">
                <div className="modelo">modelo: {props.modelo}</div>
                <div className="marca"> marca: {props.marca}</div>
                <div className="cor"> cor: {props.cor}</div>
                <div className="ano"> ano: {props.ano}</div>
                <div className="portas"> portas: {props.portas}</div>
                <div className="combustivel"> combustivel: {props.combustivel}</div>
                <div className="cambio"> cambio: {props.cambio}</div>
                <div className="tam_aro"> tam_aro: {props.tam_aro}</div>
                <div className="potencia"> potencia: {props.potencia}</div>
                <div className="preco"> preco :{props.preco}</div>

            </li>
        </>

    )
}

export default Carros