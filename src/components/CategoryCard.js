import React from 'react'
import {Col} from 'react-bootstrap'

const CategoryCard = ({img,title}) => {
  return (
    <Col
            xs="6"
            sm="6"
            md="6"
            lg="3"
            className='my-4 d-flex justify-content-around'>
                <div className="allCard mb-3">
                    <img src={img} alt="" className="category-card-img" />
                    <p className="category-card-text my-2">{title}</p>
                </div>
        </Col>
  )
}

export default CategoryCard