import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types';

const Mensaje =styled.p`
    background-color:#5499C7;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    color: #fff;
`;

const ResultadoCotizacion = styled.div`
    text-align:center;
    padding: 0.5rem;
    border: 1px; 
    background-color: #2471A3 ;
    position:relative;
    margin-top: 1rem;
`;

const TextoCotizacion = styled.p`
    color: #fff;
    padding: 1rem;

    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin: 0;

`;

const Resultado = ({cotizacion}) => {

    return ( 
        (cotizacion===0) 
        ? <Mensaje>Elige marca, año y tipo de cotización</Mensaje> :  
        <ResultadoCotizacion>
            <TransitionGroup
                component="span"
                className="resultado"
            >
                <CSSTransition
                    className="resultado"
                    key={cotizacion}
                    timeout={{enter:300, exit:300}}
                >
                    <TextoCotizacion> El total es: $<span>  {cotizacion} </span>
                    </TextoCotizacion>
                </CSSTransition>
            </TransitionGroup>
        </ResultadoCotizacion>
    );
}
Resultado.propTypes = {
    cotizacion:PropTypes.number.isRequired,
}
export default Resultado;