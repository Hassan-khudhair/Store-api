import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCardComponent = ({ nameProduct, img, Id }) => {
    return (
        <Col
            sm="8"
            md="6"
            lg="4"
            xl="3"
            className='my-4 d-flex justify-content-around all-Card-product'>
            <Link to={`/AllProduct/${Id}`} style={{ textDecoration: 'none', color: 'black' }} >
                <div className="card d-flex justify-content-cneter" style={{ width: '15rem', height: '20rem' }}>
                    <img style={{ width: '10rem', height: '12rem' }} className="card-img-top" src={img} alt="Card-image-cap" />
                    <div className="card-body" style={{ backgroundColor: '#2e91af4b' }}>
                        <p className="card-text" >{nameProduct}</p>
                    </div>
                </div>
            </Link>

        </Col>
    )
}

export default ProductCardComponent