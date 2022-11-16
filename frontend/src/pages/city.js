import React, {useState, useEffect} from 'react';
import api from '../services/api';
import {useLocation } from "react-router-dom";
import CardClient from '../Componentes/cardClient';
import { Link } from 'react-router-dom';

function City() {
    function UseQuery() {
        const { search } = useLocation();
      
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    const location = useLocation();
    const idCidade = location.pathname.split("/").pop();
    const query = UseQuery();
    const page = query.get("page") ? query.get("page") : 0;

    const [city, setCity] = useState([]);
    const [allClientsByCity, setAllClientsByCity] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
 
   useEffect(() => {
    async function getCity() {
      const response = await api.get('/cidade/' + idCidade,)
      setCity(response.data)
    }
    getCity()
    async function getAllUsersByCity() {
    const response = await api.get('/cliente/cidade/' + idCidade + '?page=' + page,)
    setAllClientsByCity(response.data.client.rows)
    setTotalPages(response.data.totalPages)
    }
    getAllUsersByCity()
  }, [])  
  const pagination = []
  for (let i = 0; i < totalPages; i++) {
    var active = '';
    if (i == page) {
        active = 'active'
    }
    pagination.push(<Link onClick={City} className={active} key={i} to={"/cidade/" + idCidade +"?page=" + i}><li>{i}</li></Link>)
  }
    return (
        <div id="Home">
            <section className='card'>
                 <ul>
                     {allClientsByCity.map(data => {
                        return <CardClient key={data.id} data={data}/>
                        })}
                 </ul>
            </section>
            <div className='boxPagination'>
                Paginação
                <div>
                    <ul className='listPagination'>
                        {pagination}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default City;