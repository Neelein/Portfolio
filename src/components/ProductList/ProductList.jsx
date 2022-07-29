import React from 'react'
import './productList.scss'
import ProductCard from '../ProductCard/ProductCard'
import { useState } from 'react'
import Data from '../../data.json'

const ProductList = () => {
    const [onClick,setOnClick]=useState(1)
    const {javascript,reactJs,mernStack}=Data

  return (
    <div className='productList'>
        <div className="productList__wrapper">
            <div className="productList__tab">
                <span className={onClick===1?"tab__active":"tab__item"} onClick={()=>setOnClick(1)}>Javascript</span>
                <span className={onClick===2?"tab__active":"tab__item"} onClick={()=>setOnClick(2)}>React JS</span>
                <span className={onClick===3?"tab__active":"tab__item"} onClick={()=>setOnClick(3)}>MERN Stack</span>
            </div>
            <div className="product__container">
                {onClick===1&&
                    javascript.map((p)=>(
                        <ProductCard data={p} cat={"javascript"} key={p.id}/>
                    ))
                }
                 {onClick===2&&
                    reactJs.map((p)=>(
                        <ProductCard data={p} cat={"reactJs"} key={p.id}/>
                    ))
                }
                 {onClick===3&&
                    mernStack.map((p)=>(
                        <ProductCard data={p} cat={"mernStack"} key={p.id}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ProductList
