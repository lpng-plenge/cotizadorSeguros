import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {PrimeraMayuscula} from '../Helper'
const ContenedorResumen =styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #5499C7;
    color: #FFF;
    margin-top: 1rem;

`;
const Resumen = ({datos}) => {

    const {marca, year, plan} =datos;
    if(marca===''||year===''||plan==='') return null;

    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {PrimeraMayuscula(marca)}</li>
                <li>Año del automovil: {year} </li>
                <li>Plan: {PrimeraMayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>
     );
}
Resumen.propTypes = {
    datos:PropTypes.object.isRequired,
}
export default Resumen;