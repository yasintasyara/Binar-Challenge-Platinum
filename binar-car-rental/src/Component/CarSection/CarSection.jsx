import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";



function CarSection() {
    const [cars, setCars] = useState();
    const [carName, setCarName] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const carNameParams = searchParams.get('carName');
    const category = searchParams.get('category');
    const price = searchParams.get('price');

    useEffect(() => {
            axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car/')
            .then(res => {
                if (carNameParams) {
                    setCars(res.data.filter((car) => { return car.name.toLowerCase() == carNameParams.toLowerCase() && car.category == category }))
                } else if (carName) {
                    setCars(res.data.filter(car => {return car.name.toLowerCase().includes(carName.toLowerCase())}))
                } else {
                    setCars(res.data)
                }
            })
        
    },[carName])

    return (
        <Fragment>
            <SearchBar carName={carName} setCarName={setCarName}/>
            <section id="Cars">
                <div className="container">
                    <div className="row">
                    {   
                        cars &&
                        cars.map((car, index) => {
                            return (
                                <div key={index} className="col-lg-4">                   
                                    <div className="card p-3 d-flex flex-column justify-content-between" style={{height: '100%'}}>
                                        <img src={car.image} alt="" style={{width: '100%'}} />
                                        <p>{car.name}</p>
                                        <h5>Rp {car.price.toLocaleString('en-US')}</h5>
                                        <p className="fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                                        <a href={`/car/${car.id}`} className="btn btn-success" style={{width:"100%"}}>Pilih Mobil</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </section>
        </Fragment>
        
    )
}


export default CarSection;