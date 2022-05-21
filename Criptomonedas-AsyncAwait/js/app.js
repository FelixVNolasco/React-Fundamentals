const criptomonedasSelect = document.querySelector('#criptomonedas')
const monedasSelect = document.querySelector('#moneda')
const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')

const obj = {
    moneda: '',
    criptomoneda: ''
}


document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();
    formulario.addEventListener('submit', enviarFormulario)
    criptomonedasSelect.addEventListener('change', leerValor)
    monedasSelect.addEventListener('change', leerValor)
})

//PROMISE PARA DESCARGAR LAS CRIPTOMONEDAS
const obtenerCriptomonedas = (criptomonedas) => new Promise ( resolve => {
        resolve(criptomonedas)
    })  

async function consultarCriptomonedas() {

    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=MXN'

    // fetch(url)
    //     .then((respuesta) => respuesta.json() )
    //     .then((resultado) => obtenerCriptomonedas(resultado.Data) )
    //     .then((criptomonedas) => selectCriptomonedas(criptomonedas))

    try {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        const criptomonedas = await obtenerCriptomonedas(resultado.Data)
        selectCriptomonedas(criptomonedas)
    } catch (error) {
        console.log(error)
    }        
}

function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
            const {FullName, Name} = cripto.CoinInfo
            // console.log(`El nombre es ${FullName} y su código es ${Name}`)
            const option = document.createElement('option')
            option.value = Name;
            option.textContent = FullName
            criptomonedasSelect.appendChild(option)           
    });
}
function leerValor(e){
    obj[e.target.name] = e.target.value;    
    // console.log(obj);
}

function enviarFormulario (e) {
    e.preventDefault();
    const {moneda, criptomoneda} = obj
    // console.log(`${moneda} ${criptomoneda}`)

    if(moneda === '' || criptomoneda === "") {
        mostrarAlerta('Ambos campos son obligatorios')
        return
    }
    
    //CONSUMO DE API
    consultarAPI();

}

function mostrarAlerta (mensaje) {

    const existeAlerta = document.querySelector('.error')

    if(!existeAlerta) {
        const alerta = document.createElement('div');
        alerta.classList.add('error')
        alerta.textContent = mensaje;   
        // console.log(mensaje)
    
        formulario.appendChild(alerta)

        setTimeout(() => {
            alerta.remove();
        },3000)
    }    
}

async function consultarAPI() {
    const {moneda, criptomoneda} = obj

    const consulta = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    mostrarSpinner();

 
    try {
        const respuesta = await fetch(consulta)
        const cotizacion = await respuesta.json();
        mostrar(cotizacion.DISPLAY[criptomoneda][moneda])
    } catch (error) {
        console.log(error)
    }
}

function mostrar(cotizacion) {

    limpiarHTML();

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR} = cotizacion

    const precio  = document.createElement('p')
    precio.classList.add('precio')
    precio.innerHTML = `PRECIO: <span>${PRICE}</span>`
  
    const alto = document.createElement('p')    
    alto.innerHTML = `PRECIO MAS ALTO DEL DIA: <span>${HIGHDAY}</span>`

    const bajo = document.createElement('p')   
    bajo.innerHTML = `PRECIO MAS BAJO DEL DIA: <span>${LOWDAY}</span>`

    const variacion = document.createElement('p')
    variacion.innerHTML = `VARIACIÓN EN LAS ULTIMAS 24 HORAS: <span>${CHANGEPCT24HOUR}%</span>`

    resultado.appendChild(precio);
    resultado.appendChild(alto);
    resultado.appendChild(bajo);
    resultado.appendChild(variacion);

}

function limpiarHTML () {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}
function mostrarSpinner() {
    limpiarHTML();

    const spinner = document.createElement('div')
    spinner.classList.add('spinner')
    spinner.innerHTML = `    
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>    
    `
    resultado.appendChild(spinner)
}