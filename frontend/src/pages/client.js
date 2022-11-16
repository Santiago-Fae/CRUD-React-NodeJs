import React, {useState, useEffect} from 'react';
import api from '../services/api';
import {useLocation } from "react-router-dom";

function Client() {
    const location = useLocation();
    const idClient = location.pathname.split("/").pop();
    const [msg, setMsg] = useState('');
    const [cities, setCities] = useState([]);
    //form 
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        async function getClient() {
            const response = await api.get('/cliente/' + idClient,)
            getAllCities(response.data.city)
            //form
            setFirstName(response.data.first_name)
            setLastName(response.data.last_name)
            setEmail(response.data.email)
            setGender(response.data.gender)
            setCity(response.data.city)
            setTitle(response.data.title)
        }
        getClient()
        async function getAllCities() {
            const response = await api.get('/cidade/',)
            setCities(response.data)
        }
        getAllCities()
    }, [])  

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.put('/cliente/' + idClient, {
        first_name,
        last_name,
        email,
        gender,
        city,
        title
    })
    setMsg(response.data.mensagem)
  }
  const htmlCitites = []
  for (let i = 0; i < cities.length; i++) {
    htmlCitites.push(<option key={i} value={cities[i].id}>{cities[i].name}</option>)  
    }   
    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="off" className='formClient'>
                <fieldset>
                    <div class="formBox">
                        <legend>Cliente</legend>
                        <div><label>Primeiro nome:</label><input type="text" value={first_name} onChange={e => setFirstName(e.target.value)}/></div>
                        <div><label>Sobrenome:</label><input type="text" value={last_name} onChange={e => setLastName(e.target.value)}/></div>
                        <div><label>Email:</label><input type="text" value={email} onChange={e => setEmail(e.target.value)}/></div>
                        <div><label>Genêro:</label><input type="text" value={gender} onChange={e => setGender(e.target.value)}/></div>
                        <div>
                            <label>Cidade:</label>
                            <select name="city" value={city} onChange={e => setCity(e.target.value)}>
                                {htmlCitites}
                            </select>
                        </div>
                        <div><label>Título:</label><input type="text" value={title} onChange={e => setTitle   (e.target.value)}/></div>
                        <input type="submit" value="Enviar"/>
                    </div>
                </fieldset>
            </form>  
            <div>{msg}</div>
        </div>
    )
}

export default Client;