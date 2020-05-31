import React,{useState} from 'react';
import Header from './componentes/Header';
import styled from '@emotion/styled';
import Formulario from './componentes/Formulario';
import Resumen from './componentes/resumen';
import Resultado from './componentes/resultado';
import Spinner from './componentes/Spinner';


const Contenedor =styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
const ContenedorFormulario =styled.div`
  background-color: #FFFF;
  padding: 3rem;
`;


function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos:{
      marca: '',
      year: '',
      plan: '',
    }
  });
  // cargar 
  const [cargar, guardarCargar] = useState(false);

  const {datos, cotizacion} = resumen;

  return (
    <Contenedor>
      <Header
        titulo='Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargar={guardarCargar}
        
        />
        {cargar ? <Spinner/> :null}

        <Resumen
          datos={datos}
        
        />
        {!cargar ? 
          <Resultado
          cotizacion={cotizacion}
          /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
