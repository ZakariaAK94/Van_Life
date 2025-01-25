/* eslint-disable no-unused-vars */
import React from 'react'
import { useOutletContext } from 'react-router-dom'
function HostVanPhoto() {
  const {imageUrl, id} = useOutletContext();
  return (
    <>
      <img src={imageUrl} className='host-van-detail-image' alt={`Image-${id}`}/>
    </>
  )
}

export default HostVanPhoto