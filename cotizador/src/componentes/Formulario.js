import React,{useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {obtenerDiferenciaYear,calcularMarca,calcularPlan} from '../Helper';


const Campo =styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label =styled.label`
    flex: 0 0 100px;
`; 
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid  #2471A3 ;
    -webkit-appearance: none;

`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;
const Button = styled.button`
    background-color: #2471A3  ;
    font-size: 19px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: backgroun-color .3s ease;
    margin-top: 3rem;
    &:hover{
        background-color: #1A5276 ;
        cursor: pointer;
    }
`;

//Alertas
const Error = styled.div`
    background-color: #E74C3C ;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;

`;

const Formulario = ({guardarResumen,guardarCargar}) => {

    const [datos, guardarDatos] = useState({
        marca: '',
        year: '',
        plan: '',

    });

    // error
    const [error, guardarError] = useState(false)

    //extraer valores del state 
    const {marca, year, plan} =datos;

    // leer datos del formulario y colocar en el state
    const obtenerInformacion= e =>{
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario usa el submit
    const cotizarSeguro = e =>{
        e.preventDefault();
        if(marca.trim()==='' ||year.trim()==='' ||plan.trim()===''  ){
            guardarError(true);
            return;
        }
        guardarError(false);

        // bases de 2000
        let resultado = 2000;

        // obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year);  
        
        // por cada año hay que restar el 3%
        resultado -= ((diferencia*3)*resultado)/100;
        
    
        // un incremento 15% Americano
        // un incremento 30% Europeo
        // un incremento 5% Asiatico
        resultado= calcularMarca(marca)*resultado;

        // Basico aumenta en 20%
        // Conpleto aumenta en 50%
        const obtenerPlan = calcularPlan(plan);
        resultado = parseFloat(obtenerPlan*resultado).toFixed(2);
        
        guardarCargar(true);
        setTimeout(()=>{
            //desapearece el spinner
            guardarCargar(false);
            // total
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            });

        },3000);

    }
    
    return (
    <form
        onSubmit={cotizarSeguro}

    >   {error ? <Error>Todos los campos son Obligatiorios</Error>: null}
        <Campo>
            <Label>Marca: </Label>
            <Select
                name='marca'
                value={marca}
                onChange={obtenerInformacion}
            >
                <option value="">--Seleccione--</option>
                <option value="Americano">Americano</option>
                <option value="Europeo">Europeo</option>
                <option value="Asiatico">Asiatico</option>        
            </Select>
        </Campo>
        <Campo>
            <Label>Año: </Label>
            <Select
                name='year'
                value={year}
                onChange={obtenerInformacion}
            >
                <option value="">-- Seleccione --</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>      
            </Select>
        </Campo>
        <Campo>
            <Label>Plan: </Label>
            <InputRadio 
                type="radio"
                name="plan"
                value="basico"
                checked={plan ==="basico"}
                onChange={obtenerInformacion}
            /> Básico
            <InputRadio 
                type="radio"
                name="plan"
                value="completo"
                checked={plan ==="completo"}
                onChange={obtenerInformacion}
            /> Completo
        </Campo>
        <Button type="submit" >Cotizar</Button>
    </form>     
    );
}
 
Formulario.propTypes = {
    guardarResumen:PropTypes.func.isRequired,
    guardarCargar:PropTypes.func.isRequired,
}

export default Formulario;