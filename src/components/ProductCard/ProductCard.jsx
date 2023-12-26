import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  return (

    <div className="card">

      <img src={props.product.thumbnail} className="card-img-top"  style={{heihgt:"250px"}} alt="..."  />
      <div classNameName="card-body">
        <h5 className="card-title" >{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <Link to={"/products?id=" +props.product.id} className="btn btn-primary">Detail</Link>
        <button className="btn btn-primary">Ekle</button>
        <button className="btn btn-danger">Sil</button>
      </div>
    </div>


  )
}
