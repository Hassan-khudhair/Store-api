import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom'
import AllProuducts from "./components/AllProuducts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavbarLogin from "./components/NavbarLogin";
import ProductDescription from "./components/ProductDescription";


function App() {
  const [data, setdata] = useState([])
  const [datalimit, setdatalimit] = useState('');

  const alldata = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setdata(data)
      })
  }
  useEffect(() => {
    alldata()
  }, [])


  const limitProduct = () => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(data => setdatalimit(data))
  }

  useEffect(() => {
    limitProduct()
  }, [])







  return (
    <div style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home datalimit={datalimit} />} />
          <Route path="/AllProduct" element={<AllProuducts data={data} />} />
          <Route path="/AllProduct/:id" element={<ProductDescription />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
