import React from 'react'
import './productCard.scss'
import { Link } from 'react-router-dom'

const ProductCard = ({data,cat}) => {
  return (
    <div className='productCard' >
        <div className="productCard__wrapper">
            <div className="product__browser">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
            </div>
            <Link to={`/Product/${cat}/${data.id}`}>
                <div className="product__img">
                    <img src={data.img} alt="" />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default ProductCard
