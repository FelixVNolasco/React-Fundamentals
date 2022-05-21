import React, {useState, Fragment} from 'react';
import {calcularTotal} from '../helpers'


const Formulario = (props) => {

    //Destructuring
    const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando} = props;

    //Definicion de State Local
    const [error, guardarError] = useState(false);

    const calcularPrestamo = (e)=> {
        e.preventDefault();
        // console.log('Diste click en submit');
        //Validacion de formulario
        if(cantidad === 0 || plazo === '')
        {
            // console.log('hay un error en alguno de los campos');
            guardarError(true);
            return;
        }
        //Quitar errores anteriores 
        guardarError(false);

        //Agregar Spinner
        guardarCargando(true);

        //Timer de 3 segundos
        setTimeout(()=> {
            //Calcular Prestamo
            const total = calcularTotal(cantidad, plazo);
            //Guardar el total 
            guardarTotal(total) 
            //Quitar Spinner
            guardarCargando(false);            
        },3000)

        
    }    
    // const leerCantidad = (e) => {
    //     guardarCantidad(parseInt(e.target.value));
    // }
    
    return (  

        <Fragment>
        <form onSubmit={calcularPrestamo}>        
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                    //   onChange={leerCantidad()}
                      onChange={(e) => { guardarCantidad( parseInt(e.target.value) ) }}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={(e) => { guardarPlazo( parseInt(e.target.value) ) }}                      
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>
        {(error) ?
            <p className="error">Todos los campos son obligatorios</p>
         : null }
  </Fragment>
    );
}

export default Formulario

