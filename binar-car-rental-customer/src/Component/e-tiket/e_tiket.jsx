<<<<<<< HEAD
import React, { Fragment } from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const E_tiket = () => {
    return (
        <Fragment>
            <div className="container mt-2">
                <div className="text-center pt-2">
                    <img src="/checklist.png" alt="success"/>
                    <h3>Pembayaran berhasil!</h3>
                    <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                </div>
                <div className="d-flex justify-content-center">
                    <div class="card w-50 mt-5 shadow p-3 mb-5 bg-body rounded">
                        <div class="card-body">
                            <div class="d-flex flex-row justify-content-between">
                                <div class="p-2">
                                    <h4>Invoice</h4>
                                    <p><small>*no invoice</small></p>
                                </div>
                                <div class="p-2">
                                    <button type="button" class="btn btn-outline-primary">
                                        <i class="bi bi-download p-1"></i>
                                        Unduh</button>
                                </div>
                            </div>

                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, .3)',
                                    display: 'flex',
                                    height: '162px',
                                    marginBottom: '24px',
                                }}
                            >
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                                    <Viewer fileUrl="/sample.pdf" />
                                </Worker>

                            </div >


                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}

=======
import React, { Fragment } from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Checklist from '../../assets/checklist.png'


const E_tiket = () => {
    return (
        <Fragment>
            <div className="container mt-2">
                <div className="text-center pt-2">
                    <img src={Checklist} alt="checklist"></img>
                    <h3>Pembayaran berhasil!</h3>
                    <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                </div>
                <div className="d-flex justify-content-center">
                    <div class="card w-50 mt-5 shadow p-3 mb-5 bg-body rounded">
                        <div class="card-body">
                            <div class="d-flex flex-row justify-content-between">
                                <div class="p-2">
                                    <h4>Invoice</h4>
                                    <p><small>*no invoice</small></p>
                                </div>
                                <div class="p-2">
                                    <button type="button" class="btn btn-outline-primary">
                                        <i class="bi bi-download p-1"></i>
                                        Unduh</button>
                                </div>
                            </div>

                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, .3)',
                                    display: 'flex',
                                    height: '162px',
                                    marginBottom: '24px',
                                    overflow: 'hidden',
                                }}
                            >
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                                    <Viewer fileUrl="/sample.pdf" />
                                </Worker>

                            </div >


                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}

>>>>>>> 1392da47199c9f0ede24735b52177b73fe6765c5
export default E_tiket