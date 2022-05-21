import React from 'react';

const Resultado = ({cantidad, plazo, total}) => ( 
        <div className='u-full-width resultado'>
            <h2>Resumen</h2>
            <p>La cantidad solicitada es de: <span>${cantidad}</span></p>
            <p>A pagar en: <span>{plazo} Meses</span></p>
            <p>Su pago mensual es de: <span>${(total/plazo).toFixed(2)}</span> </p>
            <p>El total a pagar es de: <span>{(total).toFixed(2)}</span></p>

        </div>
     );

export default Resultado;