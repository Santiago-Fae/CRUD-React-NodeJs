import React, {useState, useEffect} from 'react';
import api from '../services/api';
import CardCity from '../Componentes/cardCity';

function Home() {
    const [groupAllClientsByCity, setGroupAllClientsByCity] = useState([]);

   useEffect(() => {
    async function getGroupAllUsersByCity() {
      const response = await api.get('/',)
      setGroupAllClientsByCity(response.data)
    }
    getGroupAllUsersByCity()
  }, [])  

    return (
        <div id="Home">
            <section className='card'>
                <ul>
                    {groupAllClientsByCity.map(data => {
                        return <CardCity key={data.id} data={data}/>
                    })}
                </ul>
            </section>
        </div>
    )
}

export default Home;