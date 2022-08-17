import React from "react";


function Faq() {
    return (
        <section id="faq" className="mt-5" style={{minHeight: '400px'}}>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <h3>Frequently Asked Question</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="row mx-1">
                            <div className="card pt-3">
                                <p className=" d-flex justify-content-between">Apa saja syarat yang dibutuhkan? <i className="fa-solid fa-chevron-down"></i></p> 
                            </div>
                            <div className="card pt-3">
                                <p className=" d-flex justify-content-between">Berapa hari minimal sewa mobil lepas kunci? <i className="fa-solid fa-chevron-down "></i></p> 
                            </div>
                            <div className="card pt-3">
                                <p className=" d-flex justify-content-between">Berapa hari sebelumnya sabaiknya booking sewa mobil? <i className="fa-solid fa-chevron-down "></i></p>
                            </div>
                            <div className="card pt-3">
                                <p className=" d-flex justify-content-between">Apakah Ada biaya antar-jemput?<i className="fa-solid fa-chevron-down "></i></p>
                            </div>
                            <div className="card pt-3">
                                <p className=" d-flex justify-content-between">Bagaimana jika terjadi kecelakaan<i className="fa-solid fa-chevron-down "></i></p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;