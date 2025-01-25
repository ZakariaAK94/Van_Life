/* eslint-disable no-unused-vars */
import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPrice() {
  const {price} = useOutletContext();
  return (
    <h3 className="host-van-price">${price}<span>/day</span></h3>
  )
}

export default HostVanPrice
