import React, {useState } from 'react'

function ParImpar(props) {
 
 let numero = 0
 numero = props.num ? props.num : 0
 
 return (
 <> 
    <div>
        <h2>O resultado é:</h2>
        {numero % 2 == 0 ? <h3>par</h3> : <h3>impar</h3>}

    </div>
</>
 )
}

export default ParImpar