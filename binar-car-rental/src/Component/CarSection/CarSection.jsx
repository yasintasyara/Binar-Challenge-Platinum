import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";



function CarSection() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);

    const [carName, setCarName] = useState('');
    const [carCategory, setCarCategory] = useState('');
    const [carPrice, setCarPrice] = useState('');
    const [carStatus, setCarStatus] = useState('');
    
    const [searchParams, setSearchParams] = useSearchParams();
    const carNameParams = searchParams.get('name');
    const categoryParams = searchParams.get('category');
    const priceParams = searchParams.get('price');
    const statusParams = searchParams.get('status')
    

    const handleLiveSearch = (data) => {
        // livesearch cuma bisa pake nama mobil, parameter lainnya belum bisa.
        const filteredData = data.filter((car) => {
            if (car.name && car.name.toLowerCase().includes(carName.toLowerCase())) {
                return true;
            }
        })
        setCars(filteredData);
    }

    const handleSearchWithParams = (data) => {
        const checkPrice = (price) => {
            if (price < 400000 && priceParams == 'lt400') {
                return true;
            } else if (price >= 400000 && price <= 600000 && priceParams == '400-600') {
                return true;
            } else if (price > 600000 && priceParams == 'gt600') {
                return true;
            } else false;
        } 
    
        const checkStatus = (status) => {
            if (status == false && statusParams == 'tersedia') {
                return true;
            } if (status == true && statusParams == 'disewa') {
                return true;
            } else false;
        }

        const filteredData = data.filter((car) => {
            if (car.name) {
                return car.name.toLowerCase() == carNameParams.toLowerCase() && car.category == categoryParams && checkPrice(car.price) && checkStatus(car.status);
            }
        })

        setCars(filteredData);
    }
    

    const loadCar = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car/');
            if (carNameParams){
                handleSearchWithParams(data);
            } else if (carName) {
                handleLiveSearch(data);
            } else {
                setCars(data);
            }
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadCar();        
    },[carName, carNameParams, categoryParams, statusParams, priceParams])

    return (
        <Fragment>
            <SearchBar setSearchParams={setSearchParams} carName={carName} setCarName={setCarName} carCategory={carCategory} setCarCategory={setCarCategory} carPrice={carPrice} setCarPrice={setCarPrice} carStatus={carStatus} setCarStatus={setCarStatus} />
            <section id="cars">
                <div className="container">
                    <div className="row">
                        {
                            !loading ? (
                                cars.length? (
                                    cars.map((car, index) => {
                                        return (
                                            <div key={index} className="col-lg-4 col-md-6">                   
                                                <div className="card p-3 d-flex flex-column justify-content-between" style={{height: '100%'}}>
                                                    {car.image? (<img src={car.image} alt="" style={{width: '100%'}} /> ) : (<img src="/Assets/dummy.png" alt="" style={{width: '100%'}} /> )}                                             
                                                    
                                                    <div>
                                                        {car.name? (<p className="mt-3">{car.name}</p>) : (<p className="mt-3">Tidak ada nama</p>)}
                                                        {car.price? (<h5>Rp {car.price.toLocaleString('en-US')}/ Hari</h5>) : (<h5>Tidak Ada Harga</h5>)}
                                                        <p className="fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                                                        <a href={`/car/${car.id}`} className="btn btn-success" style={{width:"100%"}}>Pilih Mobil</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                ) : (
                                    <h2 className="text-center">Mobil Tidak Ditemukan</h2>
                                )
                            ) : (
                                <h2 className="text-center">Loading....</h2>
                            )
                        }
                    </div>
                </div>
            </section>
        </Fragment>
        
    )
}


export default CarSection;