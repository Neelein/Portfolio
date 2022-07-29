import React from 'react'
import './product.scss'
import { useParams } from 'react-router-dom'
import Data from '../../data.json'

const Product = () => {
  const params=useParams()
  const {cat,id}=params
  console.log(params)

  let data

  if(cat==='javascript'){
    data=Data.javascript
  }else if (cat === 'reactJs'){
    data=Data.reactJs
  }else{
    data=Data.mernStack
  }

  return (
    <div className='product'>
      <div className="product__wrapper">
        {
          data.filter(p=>p.id==id).map(p=>(
            <>
              <div className="product__img">
                <img src={p.img} alt="" />
              </div>
              <div className="product__info">
                <h1 className='title'>
                  {p.title}
                </h1>
                <p className="desc">
                  {p.desc}
                </p>
                <p className="skill">
                  {p.skill}
                </p>
                <a className='contact' href={p.contact}  target="_blank" >{p.contact}</a>
              </div>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Product
