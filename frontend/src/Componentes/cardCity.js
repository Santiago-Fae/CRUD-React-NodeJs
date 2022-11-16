import React from 'react';
import { Link } from 'react-router-dom';

function CardCity({data}) {
    return (
        <>
        <li className='notepad-infos'>
            <Link to={"/cidade/" + data.id}>
                <p><strong>Clientes: {data.customers_total}</strong></p>
                <p>{data.city}</p>
            </Link>
        </li>
        </>
    )
}

export default CardCity;