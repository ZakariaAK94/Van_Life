import React from 'react'
import { Outlet, NavLink, useParams, Link } from 'react-router-dom'


function HostVanDetail() {
  const navStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616" ,
}
const[currentVan,setCurrentVan] = React.useState([]);
const {id} = useParams();

React.useEffect(()=>{
    fetch(`/api/host/vans/${id}`)
    .then(response => response.json())
    .then(data => setCurrentVan(data.vans[0]))
},[id]);
  return (
    <>
        <section>
        <Link
                  to=".."
                  relative="path"
                  className="back-button"
              >&larr; <span>Back to all vans</span></Link>
          <div  className="host-van-detail-layout-container">           
            {currentVan ? <div className='host-van-detail'>
                                  <img src={currentVan.imageUrl} alt={`image-${currentVan.id}`} />
                                  <div className="host-van-detail-info-text">
                                    <i className={`van-type van-type-${currentVan.type}`}>{currentVan.type}</i>
                                    <h3>{currentVan.name}</h3>
                                    <h4>${currentVan.price}/day</h4>
                                </div> 
                          </div>
                        : <h1>Loading...</h1>}   
              <nav className='host-van-detail-nav'>         
                <NavLink end style={({isActive}) => isActive ? navStyles : null}  to=".">Details</NavLink>
                <NavLink style={({isActive}) => isActive ? navStyles : null} to="pricing">Price</NavLink>
                <NavLink style={({isActive}) => isActive ? navStyles : null} to="photos">Photos</NavLink>
            </nav> 
          <Outlet context={currentVan}/>   
          </div>        
        </section>
        
    </>
  )
}

export default HostVanDetail