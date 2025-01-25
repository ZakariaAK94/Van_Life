import React from 'react'
import { useParams } from 'react-router-dom'

function VanDetail() {

    const param = useParams();

    const[van,setVan] = React.useState(null);
        
        React.useEffect(()=>{
            fetch(`/api/vans/${param.id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans))
        },[param.id]);
    
           

  return (
     <div  className="van-detail-container">
        { van ?   
        <div className="van-detail">
            <img src={van.imageUrl} alt={`image-${van.id}`} />        
             <div className="van-info">
             <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p>${van.price}<span>/day</span></p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
        </div>      
        : 
        <h2>Loading...</h2>
        }        
    </div>
  )
}

export default VanDetail