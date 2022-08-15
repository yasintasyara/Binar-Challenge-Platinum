import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



function CarDetailSection() {
    const [car, setCar] = useState();

    let { id } = useParams();

    useEffect(() => {
        axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
        .then(res => setCar(res.data));
    }, [car]) 
        
    if (car != null) {
        return(
        <section className="mb-5" id="carDetail">
            <div className="container">
                <div className="row d-flex flex-row-reverse justify-content-evenly mx-1">
                    <div className="col-lg-4">
                        <div className=" row card p-3 d">
                            <div className="col-12 p-5">
                                <img src={car.image} alt="" style={{width: '100%'}} />
                            </div>
                            <div>
                                <h4>{car.name}</h4>
                                
                                <p><i className="fa-regular fa-user mr-2"></i> {car.category}</p>
                            </div>
                            <div className="d-flex justify-content-between my-3">
                                    <h4>Total</h4>
                                    <h4>{car.price.toLocaleString()}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 card p-4">
                        <h4>Tentang Paket</h4>
                        <h5 className="my-3">Include</h5>
                        <ul className="lh-lg" style={{listStyleType: "disc"}}>
                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata </li>
                            <li>Sudah termasuk Tiket Wisata </li>
                        </ul>
                        <h5 className="my-3">Exclude</h5>
                        <ul className="lh-lg" style={{listStyleType: "disc"}}>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                        <h5 className="my-3">Refund, Reschedule, Overtime</h5>
                        <ul className="lh-lg" style={{listStyleType: "disc"}}>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        )}      
}


export default CarDetailSection;