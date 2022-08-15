import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";



function CarSection() {
    const [cars, setCars] = useState([]);
    const [carName, setCarName] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const carNameParams = searchParams.get('carName');
    const category = searchParams.get('category');
    const price = searchParams.get('price');

    const loadCar = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car/');
            if (carNameParams) {
                setCars(data.filter((car) => { return car.name.toLowerCase() == carNameParams.toLowerCase() && car.category == category }))
            } else if (carName) {
                setCars(data.filter(car => {return car.name.toLowerCase().includes(carName.toLowerCase())}))
            } else {
                setCars(data)
            }
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };

    useEffect(() => {
            loadCar();        
    },[carName])

    return (
        <Fragment>
            <SearchBar carName={carName} setCarName={setCarName}/>
            <section id="Cars">
                <div className="container">
                    <div className="row">
                    {   !loading ? (
                            cars? (
                                cars.map((car, index) => {
                                    return (
                                        <div key={index} className="col-lg-4">                   
                                            <div className="card p-3 d-flex flex-column justify-content-between" style={{height: '100%'}}>
                                                <img src={car.image} alt="" style={{width: '100%'}} />
                                                <p>{car.name}</p>
                                                <h5>Rp {car.price.toLocaleString('en-US')}/ Hari</h5>
                                                <p className="fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                <a href={`/car/${car.id}`} className="btn btn-success" style={{width:"100%"}}>Pilih Mobil</a>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <h1>Mobil Tidak Ditemukan</h1>
                            )
                        ) : (
                            <h1 className="text-center">Loading....</h1>
                        )
                    }
                    </div>
                </div>
            </section>
        </Fragment>
        
    )
}


export default CarSection;