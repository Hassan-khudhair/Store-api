import React from 'react'
import HomeCategory from "./HomeCategory"
import ProductComponent from './ProductComponent'

const Home = ({ datalimit }) => {
  return (
    <div>
      <HomeCategory />
      <ProductComponent title='More sells' btntitle='More..' datalimit={datalimit} />
    </div>
  )
}

export default Home