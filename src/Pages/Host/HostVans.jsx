import React from 'react'
import { Link } from 'react-router-dom';

function HostVans() {
  const [hostVans, setHostVans] = React.useState([]);

    const fetchHostVans = async()=>
    {
        const response = await fetch("/api/host/vans");
        const data = await response.json();
        setHostVans(data.vans);
    }
  
    React.useEffect(()=>{
      fetchHostVans();
    },[]);

    const hostVansElement = hostVans.map(hostvan =>(
      <Link 
        to={hostvan.id}
        key={hostvan.id}
        className='host-van-link-wrapper'
      >
         <div key={hostvan.id} className="host-van-single">
            <img src={hostvan.imageUrl} alt={`image-${hostvan.id}`} />
            <div className="host-van-info">
              <h3>{hostvan.name}</h3>
              <p>${hostvan.price}/day</p>
            </div>
           
        </div>
      </Link>     
    ))

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        { hostVans.length > 0
          ?  <section> {hostVansElement} </section>
          : <h1>Loading...</h1>   
        }  
      </div>       
    </section>    
    
  )
}

export default HostVans