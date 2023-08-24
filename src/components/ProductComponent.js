import React from 'react'
import { Row, Container } from 'react-bootstrap'
import ProductCardComponent from './ProductCardComponent'
import Subtitle from './Subtitle'

const ProductComponent = ({ datalimit, title, btntitle }) => {
    return (
        <Container>
            <Row className="my-2 d-flex justify-content-around">
                <Subtitle title={title} btntitle={btntitle} pathtitle='/AllProduct' />
                {
                    datalimit.length ? (datalimit.map((item, index) => {
                        return (
                            <ProductCardComponent key={index} nameProduct={item.title} img={item.image} Id={item.id} />
                        )
                    })) : <p>no data found</p>
                }

            </Row>
        </Container>
    )
}

export default ProductComponent