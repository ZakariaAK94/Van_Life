import { useEffect, useState } from "react";
import { makeServer } from "../../server";
import { Link, useSearchParams } from "react-router-dom";

makeServer();

function Vans() {
    
    const[vans,setVans] = useState([]);
    
    const[searchParams, setSearchParams] = useSearchParams();
    const typefilter = searchParams.get("type");

    useEffect(()=>{
        fetch("/api/vans")
        .then(response => response.json())
        .then(data => setVans(data.vans))
    },[]);

    const displayedVans = typefilter ? vans.filter(van => van.type === typefilter) : vans;

    const vanElement = displayedVans.map(van=>(
        <div  key={van.id} className="van-tile">
        <Link to={van.id} >            
            <img src={van.imageUrl} alt={`image-${van.id}`} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>          
        </Link>
        </div>
        
    ));

  return (
    <div className="van-list-container">
       <h1>Explore our van options</h1>
       <div className="van-list-filter-buttons">
        <button onClick={()=>setSearchParams({type:"simple"})} className={`van-type simple ${typefilter === "simple" ? "selected" : null}`}>Simple</button>
        <button onClick={()=>setSearchParams({type:"luxury"})} className={`van-type luxury ${typefilter === "luxury" ? "selected" : null}`}>Luxury</button>
        <button onClick={()=>setSearchParams({type:"rugged"})} className={`van-type rugged ${typefilter === "rugged" ? "selected" : null}`}>Rugged</button>       
        {   typefilter ? 
            (<button onClick={()=>setSearchParams({})} className="van-type clear-filters">clear filters </button> ) : null
        }                   
      </div>
       <div className="van-list">
         {vanElement}
       </div>
    </div>    
  )
}

export default Vans