import React from 'react'
import CategoryCard from './CategoryCard'
import {Row,Container} from 'react-bootstrap'

const HomeCategory = ({pic,titel}) => {
  return (
    <Container>
            <Row className="my-2 d-flex justify-content-center">
                <CategoryCard img={pic} title={"Men's clothing"} />
                <CategoryCard img={pic} title={"Women's clothing"} />
                <CategoryCard img={pic} title={"Jewelery"} />
                <CategoryCard img={pic} title={"Electronics"} />
            </Row>
        </Container>
  )
}

export default HomeCategory