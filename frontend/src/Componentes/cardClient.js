import React from 'react';
import { Link } from 'react-router-dom';

function CardClient({data}) {
    return (
        <>
        <li className='notepad-infos' key={data.id}>
            <Link to={"/cliente/" + data.id}>
                <div className='clientCard'>
                    <p>Nome: <strong>{data.first_name} {data.last_name}</strong></p>
                    <p>Email: <strong>{data.email}</strong></p>
                    <p>Empresa: <strong>{data.company}</strong></p>
                </div>
            </Link>
        </li>
        </>
    )
}

export default CardClient;