import React from 'react'
import './portfolio.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductList from '../../components/ProductList/ProductList'

const Portfolio = () => {
  return (
    <>
      <Sidebar/>
      <div className='portfolio'>
        <div className="portfolio__wrapper">
          <ProductList/>
        </div>
      </div>
    </>
  )
}

export default Portfolio
