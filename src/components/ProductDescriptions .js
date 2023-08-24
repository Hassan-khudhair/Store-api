import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const ProductDescriptions = () => {

    const {Id} =useParams();
    const [idData, setidData] = useState('');
    const idCard = () => {
        fetch(`https://fakestoreapi.com/products/${Id}`)
            .then(res => res.json())
            .then(data => {
                setidData(data)
            })
    }

    useEffect(() => {
        idCard();
    }, [idData])

    return (
        <div style={{ minHeight: '100vh' }}>
            <div className="card mt-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={idData.image} className="card-img my-4" style={{ width: '300px' }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{idData.title}</h5>
                            <p className="card-text"> {idData.description}</p>
                            <p className="card-text">Price : <small className="text-muted">{idData.price} $</small></p>
                            <p className="card-text"> category of the {idData.category}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDescriptions 