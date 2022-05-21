import React, {Fragment, useState} from 'react'
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import Mensaje from './componentes/Mensaje'
import Resultado from './componentes/Resultado'
import Spinner from './componentes/Spinner'

function App() {

  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);


  let componente;

  if(cargando) {
    componente = <Spinner/>   
  } else if(total === 0) {
    componente = <Mensaje/>
  } else  {
    componente = <Resultado
                  cantidad={cantidad}
                  plazo={plazo}
                  total={total}
    />
  }
  return (
    <Fragment>
      <Header
        titulo = "Cotizador de prestamos"
      />
      <div className = 'container'>
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />  
        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
