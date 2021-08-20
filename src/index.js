// este es nuestro punto de entrada
// es el primer archivo que va a ser detectado en la aplicacion
import React from 'react';
//React Dom es la libreria que funciona al mismo tiempo con react para empujar todo
//lo que nosotros hagamos con react hacia el navegador
// 'reac-dom' es la dependecia que instalamos
import ReactDom from 'react-dom';

//utilizamos react-dom para pasar el componente que queremos renderizar en le navegador
import App from './containers/App'

//render recibe 2 parametros = el componente y donde voy a empujar este componente
ReactDom.render(<App/>,document.getElementById('app'))